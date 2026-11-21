'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { event, industries, packages, referrals } from '@/lib/event';
import { validateRegistration } from '@/lib/register-schema';
import { IconArrow, IconCheck, IconMail } from '@/components/Icons';

const emptyValues = {
  businessName: '',
  contactName: '',
  email: '',
  phone: '',
  website: '',
  industry: '',
  booth: 'corner',
  description: '',
  referral: '',
  consent: false,
};

function errorProps(name, errors) {
  return errors[name]
    ? { 'aria-invalid': true, 'aria-describedby': `${name}-error` }
    : {};
}

export default function RegisterForm({ initialPackage }) {
  const [values, setValues] = useState({ ...emptyValues, booth: initialPackage });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const successRef = useRef(null);

  useEffect(() => {
    if (!confirmation) return;
    successRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    successRef.current?.focus({ preventScroll: true });
  }, [confirmation]);

  function setField(name) {
    return (inputEvent) => {
      const { type, checked, value } = inputEvent.target;
      setValues((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }));
      if (errors[name]) {
        setErrors((previous) => {
          const next = { ...previous };
          delete next[name];
          return next;
        });
      }
    };
  }

  async function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    const result = validateRegistration(values);

    if (!result.valid) {
      setErrors(result.errors);
      setFormError('Please fix the highlighted fields and try again.');
      const first = Object.keys(result.errors)[0];
      document.querySelector(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setFormError('');
    setSubmitting(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.values),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setFormError(data.error || 'Something went wrong. Please try again in a moment.');
        return;
      }

      const chosen = packages.find((item) => item.id === result.values.booth);
      setConfirmation({
        id: data.id,
        businessName: result.values.businessName,
        email: result.values.email,
        boothName: chosen?.name ?? 'Exhibitor booth',
        boothSize: chosen?.size ?? '',
      });
    } catch {
      setFormError('We could not reach the server. Check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setValues({ ...emptyValues, booth: initialPackage });
    setErrors({});
    setFormError('');
    setConfirmation(null);
  }

  if (confirmation) {
    return (
      <div className="success-card" role="status" ref={successRef} tabIndex={-1}>
        <span className="success-icon" aria-hidden="true">
          <IconCheck size={26} />
        </span>
        <span className="section-eyebrow">You are on the list</span>
        <h2>Booth request received.</h2>
        <p>
          Thanks, {confirmation.businessName}. We saved your registration and will email{' '}
          <strong>{confirmation.email}</strong> within two business days with your invoice and next
          steps.
        </p>

        <div className="success-code">
          Registration code <b>{confirmation.id}</b>
        </div>

        <div className="success-summary">
          <div>
            <span>Booth</span>
            <strong>
              {confirmation.boothName}
              {confirmation.boothSize ? ` · ${confirmation.boothSize}` : ''}
            </strong>
          </div>
          <div>
            <span>Event</span>
            <strong>{event.date}</strong>
          </div>
          <div>
            <span>Venue</span>
            <strong>{event.venue}</strong>
          </div>
        </div>

        <ul className="success-steps">
          <li>
            <IconMail size={17} />
            Keep an eye on your inbox for a confirmation and invoice from {event.email}.
          </li>
          <li>
            <IconCheck size={17} />
            Your booth is held for five days while you arrange payment.
          </li>
          <li>
            <IconCheck size={17} />
            Send us your logo and a 30-word description to be listed in the event app.
          </li>
        </ul>

        <div className="success-actions">
          <Link className="btn btn-primary" href="/">
            Back to the expo
            <IconArrow size={17} />
          </Link>
          <button type="button" className="btn btn-outline" onClick={resetForm}>
            Register another business
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      {formError && (
        <div className="form-banner" role="alert">
          {formError}
        </div>
      )}

      <div className="form-section">
        <div className="form-section-head">
          <span className="form-step">1</span>
          <div>
            <h2>Your business</h2>
            <p>This is what attendees will see in the event app.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field full">
            <label htmlFor="businessName">Business name *</label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              autoComplete="organization"
              placeholder="e.g. Marlowe Coffee Roasters"
              value={values.businessName}
              onChange={setField('businessName')}
              maxLength={120}
              {...errorProps('businessName', errors)}
            />
            {errors.businessName && (
              <span className="field-error" id="businessName-error">
                {errors.businessName}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="industry">Industry *</label>
            <select
              id="industry"
              name="industry"
              value={values.industry}
              onChange={setField('industry')}
              {...errorProps('industry', errors)}
            >
              <option value="">Choose an industry</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            {errors.industry && (
              <span className="field-error" id="industry-error">
                {errors.industry}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="website">
              Website <span className="opt">(optional)</span>
            </label>
            <input
              id="website"
              name="website"
              type="text"
              inputMode="url"
              autoComplete="url"
              placeholder="yourbusiness.com"
              value={values.website}
              onChange={setField('website')}
              maxLength={200}
              {...errorProps('website', errors)}
            />
            {errors.website && (
              <span className="field-error" id="website-error">
                {errors.website}
              </span>
            )}
          </div>

          <div className="field full">
            <label htmlFor="description">What does your business do? *</label>
            <textarea
              id="description"
              name="description"
              placeholder="Tell attendees what you sell, who you serve, and anything you will be showing at the expo."
              value={values.description}
              onChange={setField('description')}
              maxLength={800}
              {...errorProps('description', errors)}
            />
            {errors.description ? (
              <span className="field-error" id="description-error">
                {errors.description}
              </span>
            ) : (
              <span className="hint">
                {values.description.length}/800 characters. Aim for two or three sentences.
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-section-head">
          <span className="form-step">2</span>
          <div>
            <h2>Who should we contact?</h2>
            <p>We will send your confirmation and invoice here.</p>
          </div>
        </div>

        <div className="field-grid">
          <div className="field">
            <label htmlFor="contactName">Contact name *</label>
            <input
              id="contactName"
              name="contactName"
              type="text"
              autoComplete="name"
              placeholder="First and last name"
              value={values.contactName}
              onChange={setField('contactName')}
              maxLength={100}
              {...errorProps('contactName', errors)}
            />
            {errors.contactName && (
              <span className="field-error" id="contactName-error">
                {errors.contactName}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="email">Work email *</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@yourbusiness.com"
              value={values.email}
              onChange={setField('email')}
              maxLength={160}
              {...errorProps('email', errors)}
            />
            {errors.email && (
              <span className="field-error" id="email-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="phone">
              Phone <span className="opt">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(555) 000-0000"
              value={values.phone}
              onChange={setField('phone')}
              maxLength={40}
              {...errorProps('phone', errors)}
            />
            {errors.phone && (
              <span className="field-error" id="phone-error">
                {errors.phone}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="referral">
              How did you hear about us? <span className="opt">(optional)</span>
            </label>
            <select
              id="referral"
              name="referral"
              value={values.referral}
              onChange={setField('referral')}
              {...errorProps('referral', errors)}
            >
              <option value="">Select one</option>
              {referrals.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.referral && (
              <span className="field-error" id="referral-error">
                {errors.referral}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-section-head">
          <span className="form-step">3</span>
          <div>
            <h2>Pick your booth</h2>
            <p>One price for the full day. You can change packages later.</p>
          </div>
        </div>

        <div
          className="package-grid"
          role="radiogroup"
          aria-label="Booth package"
          aria-describedby={errors.booth ? 'booth-error' : undefined}
        >
          {packages.map((item) => (
            <label className="package-option" key={item.id}>
              <input
                type="radio"
                name="booth"
                value={item.id}
                checked={values.booth === item.id}
                onChange={setField('booth')}
              />
              <span className="package-info">
                <span className="package-name">
                  <strong>{item.name}</strong>
                  {item.popular && <span className="tag-popular">Most popular</span>}
                </span>
                <span>
                  {item.size} · {item.blurb}
                </span>
              </span>
              <span className="package-price">${item.price}</span>
            </label>
          ))}
        </div>
        {errors.booth && (
          <span className="field-error" id="booth-error">
            {errors.booth}
          </span>
        )}

        <label className="consent" htmlFor="consent">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={setField('consent')}
            {...errorProps('consent', errors)}
          />
          <span>
            I agree to be contacted by the Expolink Global team about this registration and the event.
          </span>
        </label>
        {errors.consent && (
          <span className="consent-error" id="consent-error">
            {errors.consent}
          </span>
        )}

        <div className="form-submit">
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Sending your registration…' : 'Send my registration'}
            {!submitting && <IconArrow size={18} />}
          </button>
          <p className="form-submit-note">
            No payment today. We will email an invoice within two business days.
          </p>
        </div>
      </div>
    </form>
  );
}
