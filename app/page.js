import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import { event, industries, packages } from '@/lib/event';
import {
  IconArrow,
  IconCalendar,
  IconCheck,
  IconClock,
  IconLink,
  IconMegaphone,
  IconPin,
  IconSpark,
  IconStore,
  IconTicket,
  IconTrend,
  IconUsers,
} from '@/components/Icons';

export const metadata = {
  title: { absolute: 'Expolink Business Expo 2027 — Register your business' },
  description:
    'Register your business for Expolink 2027, a one-day expo connecting local business owners with 3,000+ buyers, partners, and press.',
};

const benefits = [
  {
    icon: IconStore,
    title: 'Meet buyers with intent',
    text: 'Attendees register because they are looking for a local supplier, service, or product. No cold outreach, no guessing.',
  },
  {
    icon: IconMegaphone,
    title: 'Launch in front of a crowd',
    text: 'Debut a new product, menu, or service. Exhibitors can book a 10-minute slot on the demo stage to show it off.',
  },
  {
    icon: IconTrend,
    title: 'Leave with leads, not loose cards',
    text: 'Every visitor badge is scanned at your booth. You get the full contact list by email the next morning.',
  },
  {
    icon: IconLink,
    title: 'Build the right partnerships',
    text: 'Meet complementary businesses, distributors, and local press in one afternoon instead of ten separate coffees.',
  },
];

const steps = [
  {
    title: 'Pick a booth and register',
    text: 'Two minutes, no payment. Tell us about your business and choose a package that fits.',
  },
  {
    title: 'We confirm and invoice',
    text: 'A real person reviews your registration and sends an invoice within two business days. Your spot is held for five days.',
  },
  {
    title: 'Show up and set up',
    text: 'Load in from 7:00 AM. Tables, chairs, power, and Wi-Fi are waiting. Doors open at 9:00.',
  },
];

const included = [
  'Venue Wi-Fi and power at your booth',
  'Listing in the event app',
  'Two or more exhibitor passes',
  'Morning coffee and lunch',
  'Access to the exhibitor lounge',
  'Attendee contact list the next day',
];

const faqs = [
  {
    q: 'Who can register?',
    a: 'Any registered local business with a product, service, or cause to share. Solo founders are welcome, and two businesses can share a booth with approval.',
  },
  {
    q: 'Is the booth price all-in?',
    a: 'Yes. Table, chairs, power, Wi-Fi, passes, and your event app listing are included. Extra furniture or banner printing is available at cost.',
  },
  {
    q: 'Do I pay when I register?',
    a: 'No. We review each registration first and send an invoice within two business days. Your booth is held for five days while you arrange payment.',
  },
  {
    q: 'Can two businesses share a booth?',
    a: 'Yes, up to two businesses per booth with approval. Both get listed in the event app. Email us both names after you register.',
  },
  {
    q: 'What if I need to cancel?',
    a: 'You get a full refund up to 21 days before the event. After that, you can transfer your booth to another business at no charge.',
  },
  {
    q: 'Can I sell food or drink?',
    a: 'Yes, with a temporary food permit from the city. Mention it in your business description and we will send you the paperwork.',
  },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <section className="hero-section">
        <div className="hero-shell">
          <div className="hero-card">
            <div className="hero-head">
              <h1 className="hero-title">
                <span className="hero-title-group">
                  <span className="hero-line-one">Meet your</span>
                  <span className="hero-line-two">next 3,000</span>
                </span>
                <span className="hero-title-group hero-title-group--end">
                  <span className="hero-line-one">In just</span>
                  <span className="hero-line-two">
                    one day.
                    <span className="hero-spark" aria-hidden="true">
                      <IconSpark size={26} />
                    </span>
                  </span>
                </span>
              </h1>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-decor" aria-hidden="true">
                <span />
                <span />
              </div>

              <div className="hero-subject" aria-hidden="true">
                <img
                  src="/hero-art-lilac.webp"
                  alt=""
                  width="1024"
                  height="1024"
                  fetchPriority="high"
                />
              </div>

              <div className="hero-panel-copy">
                <span className="hero-panel-tag">
                  <span className="hero-panel-dot" aria-hidden="true" />
                  {event.boothsLeft} booths left
                </span>
                <h2>Your booth, in the middle of the action.</h2>
                <p className="hero-panel-sub">
                  Meet buyers, partners, and press without the noise of a giant trade show. One
                  booth, one day, real conversations.
                </p>
                <Link className="btn btn-primary" href="/register">
                  Register your business
                  <span className="btn-icon">
                    <IconArrow size={16} />
                  </span>
                </Link>
                <div className="hero-proof">
                  <span className="hero-avatars" aria-hidden="true">
                    <i><IconStore size={12} /></i>
                    <i><IconUsers size={12} /></i>
                    <i><IconSpark size={12} /></i>
                  </span>
                  <span className="hero-proof-text">
                    Trusted by <b>120</b> local businesses
                  </span>
                </div>
              </div>

              <div className="hero-panel-side">
                <div className="hero-panel-features">
                  <div>
                    <span className="hero-feature-icon">
                      <IconStore size={15} />
                    </span>
                    <span>Prime<br />position</span>
                  </div>
                  <div>
                    <span className="hero-feature-icon">
                      <IconUsers size={15} />
                    </span>
                    <span>Buyers with<br />intent</span>
                  </div>
                  <div>
                    <span className="hero-feature-icon">
                      <IconLink size={15} />
                    </span>
                    <span>Lead list<br />next day</span>
                  </div>
                </div>

                <div className="hero-side-bottom">
                  <p className="hero-side-label">Featured booth</p>

                  <Link className="hero-shop-card" href="/register?package=corner">
                    <span className="hero-shop-thumb" aria-hidden="true" />
                    <span className="hero-shop-body">
                      <strong className="hero-shop-name">Corner booth</strong>
                      <span className="hero-shop-meta">3 × 6 m · most popular</span>
                      <span className="hero-shop-price">
                        <IconTicket size={13} />
                        $400
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-booths" id="booths">
        <div className="container">
          <div className="section-head section-head-row">
            <div>
              <span className="section-eyebrow">Booth packages</span>
              <h2>
                Pick a booth. <span className="text-purple">We&apos;ll fill the room.</span>
              </h2>
              <p className="section-sub">
                Every package includes the essentials. One price for the full day, and you do not
                pay until we confirm your registration.
              </p>
            </div>
            <span className="event-pill">
              <IconCalendar size={16} />
              {event.dateShort} · {event.venue}
            </span>
          </div>

          <div className="booth-grid">
            {packages.map((item) => (
              <article className={`booth-card ${item.popular ? 'is-popular' : ''}`} key={item.id}>
                <div className={`booth-art booth-art--${item.id}`}>
                  <span className="booth-size">{item.size}</span>
                </div>
                <div className="booth-body">
                  <div className="booth-title-row">
                    <h3>{item.name}</h3>
                    {item.popular && <span className="tag-popular">Most popular</span>}
                  </div>
                  <p className="booth-blurb">{item.blurb}</p>
                  <div className="booth-price">
                    <b>${item.price}</b>
                    <span>one-time</span>
                  </div>
                  <ul className="booth-includes">
                    {item.includes.map((line) => (
                      <li key={line}>
                        <IconCheck size={15} />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className={`btn ${item.popular ? 'btn-primary' : 'btn-outline'} btn-block booth-cta`}
                    href={`/register?package=${item.id}`}
                  >
                    Choose {item.name.toLowerCase()}
                    <IconArrow size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="industry-strip">
            <span className="industry-label">Who exhibits</span>
            <div className="industry-chips">
              {industries.slice(0, 8).map((industry) => (
                <span key={industry} className="chip">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-why" id="why">
        <div className="container">
          <div className="why-split">
            <article className="why-panel why-panel--intro">
              <span className="section-eyebrow">Why exhibit</span>
              <h2>
                Your next 50 customers are{' '}
                <span className="text-purple">already in the building.</span>
              </h2>
              <p className="section-sub">
                Trade shows work when the room is built for conversations. Expolink caps
                exhibitors at 120 and markets hard to local buyers, so every aisle stays busy.
              </p>
              <div className="why-visual" aria-hidden="true">
                <img
                  src="/hero-art-lilac.webp"
                  alt=""
                  width="1024"
                  height="1024"
                  loading="lazy"
                />
              </div>
            </article>

            <article className="why-panel why-panel--list">
              <h2>What you leave with.</h2>
              <ul className="benefit-list">
                {benefits.map(({ icon: Icon, title, text }) => (
                  <li key={title}>
                    <span className="benefit-icon">
                      <Icon size={18} />
                    </span>
                    <div>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="container">
          <div className="how-panel">
            <div className="section-head">
              <span className="section-eyebrow">How it works</span>
              <h2>From sign-up to doors open in three steps.</h2>
              <p className="section-sub">
                No paperwork maze. Three steps and a real person on the other end if you get stuck.
              </p>
            </div>

            <div className="how-grid">
              <ol className="steps">
                {steps.map((step, index) => (
                  <li className="step" key={step.title}>
                    <span className="step-num">0{index + 1}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <aside className="included-card">
                <span className="icon-tile">
                  <IconTicket size={22} />
                </span>
                <h3>Every booth includes</h3>
                <ul className="check-list">
                  {included.map((line) => (
                    <li key={line}>
                      <IconCheck size={16} />
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="included-note">
                  Questions about what to bring? Email{' '}
                  <a href={`mailto:${event.email}`}>{event.email}</a> and we will help you plan.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="details">
        <div className="container">
          <div className="detail-panel">
            <span className="detail-spark" aria-hidden="true">
              <IconSpark size={26} />
            </span>
            <div className="detail-copy">
              <span className="panel-eyebrow">Event details</span>
              <h2>One day. One hall. Every local business worth knowing.</h2>
              <p>
                Riverside Convention Center, Hall A. Free for visitors, built for exhibitors. Load
                in early, stay for the after-hours mixer, and leave with a full contact list.
              </p>
              <Link className="btn btn-primary" href="/register">
                Reserve a booth
                <IconArrow size={17} />
              </Link>
            </div>

            <div className="detail-grid">
              <div className="detail-item">
                <IconCalendar size={19} />
                <span>Date</span>
                <strong>{event.date}</strong>
              </div>
              <div className="detail-item">
                <IconClock size={19} />
                <span>Show hours</span>
                <strong>{event.time}</strong>
              </div>
              <div className="detail-item">
                <IconPin size={19} />
                <span>Venue</span>
                <strong>
                  {event.venue}
                  <br />
                  {event.address}
                </strong>
              </div>
              <div className="detail-item">
                <IconTicket size={19} />
                <span>Exhibitor load-in</span>
                <strong>{event.loadIn}</strong>
              </div>
              <div className="detail-item">
                <IconUsers size={19} />
                <span>After-hours mixer</span>
                <strong>5:30 PM — 7:00 PM · Hall A</strong>
              </div>
              <div className="detail-item">
                <IconLink size={19} />
                <span>Need help?</span>
                <strong>{event.email}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">FAQ</span>
            <h2>Good questions, straight answers.</h2>
            <p className="section-sub">
              Still unsure? Email <a href={`mailto:${event.email}`}>{event.email}</a> — a human
              usually replies the same day.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq" key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container">
          <div className="cta">
            <span className="cta-spark" aria-hidden="true">
              <IconSpark size={30} />
            </span>
            <div>
              <h2>{event.boothsLeft} booths left for 2027.</h2>
              <p>
                Register today and we will hold your spot while you sort the details. No payment
                until your registration is confirmed.
              </p>
            </div>
            <Link className="btn btn-ink" href="/register">
              Register your business
              <span className="btn-icon">
                <IconArrow size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
