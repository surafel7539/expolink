import { event, packages } from '@/lib/event';
import RegisterForm from './RegisterForm';
import SiteNav from '@/components/SiteNav';
import { IconCalendar, IconCheck, IconClock, IconPin, IconTicket } from '@/components/Icons';

export const metadata = {
  title: 'Register your business',
  description:
    'Reserve a booth at Expolink 2027. Choose a package, tell us about your business, and we will confirm your spot within two business days.',
};

export default async function RegisterPage({ searchParams }) {
  const params = await searchParams;
  const requested = typeof params?.package === 'string' ? params.package : '';
  const initialPackage = packages.some((item) => item.id === requested) ? requested : 'corner';

  return (
    <>
      <SiteNav />
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Exhibitor registration</span>
          <h1>
            Claim your booth at <span className="mark">Expolink 2027.</span>
          </h1>
          <p>
            Tell us a little about your business and pick a package. It takes about two minutes,
            there is no payment today, and a real person will confirm your spot within two business
            days.
          </p>
          <div className="hero-meta">
            <span>
              <IconCalendar size={15} />
              {event.date}
            </span>
            <span>
              <IconPin size={15} />
              {event.venue}
            </span>
            <span>
              <IconTicket size={15} />
              {event.boothsLeft} booths left
            </span>
          </div>
        </div>
      </section>

      <div className="container register-layout">
        <RegisterForm initialPackage={initialPackage} />

        <aside className="register-aside" aria-label="Event summary">
          <div className="summary-card">
            <h3>Event snapshot</h3>
            <div className="summary-rows">
              <div className="summary-row">
                <IconCalendar size={18} />
                <div>
                  <strong>{event.date}</strong>
                  <span>{event.time}</span>
                </div>
              </div>
              <div className="summary-row">
                <IconPin size={18} />
                <div>
                  <strong>{event.venue}</strong>
                  <span>{event.address}</span>
                </div>
              </div>
              <div className="summary-row">
                <IconTicket size={18} />
                <div>
                  <strong>Exhibitor load-in from 7:00 AM</strong>
                  <span>Doors open to visitors at 9:00 AM</span>
                </div>
              </div>
              <div className="summary-row">
                <IconClock size={18} />
                <div>
                  <strong>{event.boothsLeft} booths remaining</strong>
                  <span>Capped at 120 exhibitors, first come first served</span>
                </div>
              </div>
            </div>
            <ul className="check-list">
              <li>
                <IconCheck size={16} />
                Table, chairs, power, and Wi-Fi included
              </li>
              <li>
                <IconCheck size={16} />
                Listing in the event app
              </li>
              <li>
                <IconCheck size={16} />
                Attendee contact list the next day
              </li>
            </ul>
            <p className="summary-note">
              Registration is free. Invoices are sent after we review your details, and your booth
              is held for five days while you arrange payment.
            </p>
          </div>

          <div className="help-card">
            <h4>Need a hand?</h4>
            <p>
              Email <a href={`mailto:${event.email}`}>{event.email}</a> or call {event.phone}. We
              reply within one business day and are happy to talk through booth sizes.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
