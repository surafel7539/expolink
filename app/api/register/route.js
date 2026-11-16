import { NextResponse } from 'next/server';
import { validateRegistration } from '@/lib/register-schema';
import { createRegistration } from '@/lib/registrations';

export const runtime = 'nodejs';

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Send registration details as JSON.' }, { status: 400 });
  }

  const { values, errors, valid } = validateRegistration(body);
  if (!valid) {
    return NextResponse.json(
      { ok: false, error: 'Please check the highlighted fields.', errors },
      { status: 422 }
    );
  }

  try {
    const record = await createRegistration(values);
    return NextResponse.json({ ok: true, id: record.id }, { status: 201 });
  } catch (error) {
    if (error.code === 'DUPLICATE_EMAIL') {
      return NextResponse.json(
        {
          ok: false,
          error: 'That email is already registered. Email hello@expolink.events to update your details.',
          errors: { email: 'This email has already been registered.' },
        },
        { status: 409 }
      );
    }

    console.error('Registration failed:', error);
    return NextResponse.json(
      { ok: false, error: 'Something went wrong on our side. Please try again in a moment.' },
      { status: 500 }
    );
  }
}
