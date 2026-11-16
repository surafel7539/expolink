import { randomBytes } from 'node:crypto';
import { getDb } from './db';

function makeId() {
  return `EX-${randomBytes(3).toString('hex').toUpperCase()}`;
}

export async function createRegistration(registration) {
  const sql = getDb();
  const id = makeId();

  const rows = await sql`
    INSERT INTO registrations (
      id, business_name, industry, website, description,
      contact_name, email, phone, referral, booth, consent
    )
    VALUES (
      ${id},
      ${registration.businessName},
      ${registration.industry},
      ${registration.website || null},
      ${registration.description},
      ${registration.contactName},
      ${registration.email},
      ${registration.phone || null},
      ${registration.referral || null},
      ${registration.booth},
      ${registration.consent}
    )
    ON CONFLICT (email) DO NOTHING
    RETURNING id, created_at
  `;

  if (rows.length === 0) {
    const error = new Error('This email has already been registered.');
    error.code = 'DUPLICATE_EMAIL';
    throw error;
  }

  return {
    id: rows[0].id,
    ...registration,
    createdAt: rows[0].created_at,
  };
}
