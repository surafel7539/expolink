import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SiteFooter from '@/components/SiteFooter';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Expolink Business Expo 2027',
    template: '%s · Expolink',
  },
  description:
    'A one-day expo where local business owners meet customers, partners, and press. Register your business for Expolink 2027.',
};

export const viewport = {
  themeColor: '#f2effa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
