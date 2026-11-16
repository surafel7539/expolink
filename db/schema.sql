CREATE TABLE IF NOT EXISTS registrations (
  id text PRIMARY KEY,
  business_name text NOT NULL,
  industry text NOT NULL,
  website text,
  description text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone text,
  referral text,
  booth text NOT NULL,
  consent boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
