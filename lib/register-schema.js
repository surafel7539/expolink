import { industries, packages, referrals } from './event.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value, max) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export function normalizeWebsite(value) {
  if (!value) return '';
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

export function validateRegistration(input) {
  const values = {
    businessName: clean(input?.businessName, 120),
    contactName: clean(input?.contactName, 100),
    email: clean(input?.email, 160).toLowerCase(),
    phone: clean(input?.phone, 40),
    website: clean(input?.website, 200),
    industry: clean(input?.industry, 60),
    booth: clean(input?.booth, 40),
    description: clean(input?.description, 800),
    referral: clean(input?.referral, 60),
    consent: input?.consent === true,
  };

  const errors = {};

  if (values.businessName.length < 2) {
    errors.businessName = 'Enter your business name.';
  }
  if (values.contactName.length < 2) {
    errors.contactName = 'Enter the name of the person we should contact.';
  }
  if (!emailPattern.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (values.phone && values.phone.length < 7) {
    errors.phone = 'Enter a valid phone number, or leave it blank.';
  }
  if (values.website && !/\./.test(values.website)) {
    errors.website = 'Enter a website like yourbusiness.com, or leave it blank.';
  }
  if (!industries.includes(values.industry)) {
    errors.industry = 'Choose the closest industry.';
  }
  if (!packages.some((item) => item.id === values.booth)) {
    errors.booth = 'Choose a booth package.';
  }
  if (values.description.length < 20) {
    errors.description = 'Tell attendees about your business in at least 20 characters.';
  }
  if (values.referral && !referrals.includes(values.referral)) {
    errors.referral = 'Choose how you heard about the expo.';
  }
  if (!values.consent) {
    errors.consent = 'Please agree to be contacted about your registration.';
  }

  return {
    values: {
      ...values,
      website: normalizeWebsite(values.website),
    },
    errors,
    valid: Object.keys(errors).length === 0,
  };
}
