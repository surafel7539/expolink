import { promises as fs } from 'node:fs';
import path from 'node:path';
import { randomBytes } from 'node:crypto';

const dataDir = path.join(process.cwd(), 'data');
const dataFile = path.join(dataDir, 'registrations.json');

let queue = Promise.resolve();

async function readAll() {
  try {
    const raw = await fs.readFile(dataFile, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

function makeId() {
  return `EX-${randomBytes(3).toString('hex').toUpperCase()}`;
}

async function persist(list) {
  await fs.mkdir(dataDir, { recursive: true });
  const tempFile = `${dataFile}.${Date.now()}.tmp`;
  await fs.writeFile(tempFile, JSON.stringify(list, null, 2), 'utf8');
  await fs.rename(tempFile, dataFile);
}

export function createRegistration(registration) {
  const run = async () => {
    const list = await readAll();
    if (list.some((entry) => entry.email === registration.email)) {
      const error = new Error('This email has already been registered.');
      error.code = 'DUPLICATE_EMAIL';
      throw error;
    }

    let id = makeId();
    while (list.some((entry) => entry.id === id)) id = makeId();

    const record = { id, ...registration, createdAt: new Date().toISOString() };
    await persist([...list, record]);
    return record;
  };

  const result = queue.then(run, run);
  queue = result.catch(() => {});
  return result;
}
