import Link from 'next/link';
import { event } from '@/lib/event';
import { IconMail, IconPhone } from './Icons';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label="Expolink home">
              Expolink<span className="brand-dot">.</span>
            </Link>
            <p>
              A one-day expo connecting local business owners with the customers and partners
              already looking for them.
            </p>
            <div className="footer-contact">
              <a href={`mailto:${event.email}`}>
                <IconMail size={16} />
                {event.email}
              </a>
              <a href="tel:+15550123456">
                <IconPhone size={16} />
                {event.phone}
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>The event</h4>
            <Link href="/#why">Why exhibit</Link>
            <Link href="/#booths">Booth options</Link>
            <Link href="/#how">How it works</Link>
            <Link href="/#faq">FAQ</Link>
          </div>

          <div className="footer-col">
            <h4>Exhibitors</h4>
            <Link href="/register">Register your business</Link>
            <a href={`mailto:${event.email}`}>Talk to the team</a>
            <a href="#main">Back to top</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2027 Expolink. Built for local business.</span>
          <span>
            {event.date} · {event.venue}
          </span>
        </div>
      </div>
    </footer>
  );
}
