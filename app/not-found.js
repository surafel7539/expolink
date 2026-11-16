import Link from 'next/link';
import { IconArrow } from '@/components/Icons';

export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="section-eyebrow">404</span>
        <h1>That page is not in the hall.</h1>
        <p>
          The link may be old or mistyped. Head back to the expo home page, or register your
          business for March 14.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/">
            Back to home
            <IconArrow size={17} />
          </Link>
          <Link className="btn btn-soft" href="/register">
            Register your business
          </Link>
        </div>
      </div>
    </section>
  );
}
