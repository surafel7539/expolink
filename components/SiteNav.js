'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#why', label: 'Why exhibit' },
  { href: '/#booths', label: 'Booths' },
  { href: '/#how', label: 'How it works' },
  { href: '/#faq', label: 'FAQ' },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Expolink home">
          Expolink<span className="brand-dot">.</span>
        </Link>

        <nav id="site-nav" className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main">
          {links.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="btn btn-outline btn-sm nav-cta" href="/register">
            Register
          </Link>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`nav-toggle-bars ${open ? 'is-open' : ''}`} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
}
