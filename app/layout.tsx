import type { Metadata } from 'next';
import '../src/index.css';
import { SiteShell } from '../src/site/SiteContext';

export const metadata: Metadata = {
  title: 'TERVOONE — One Platform. More Possibilities.',
  description:
    'Property buying made simple, transparent, and rewarding in Chennai. Discover apartments, villas, and plots with zero lead selling, direct WhatsApp support, and exclusive community lifestyle rewards.',
  openGraph: {
    title: 'TERVOONE — One Platform. More Possibilities.',
    description:
      'Property buying made simple, transparent, and rewarding in Chennai. Discover apartments, villas, and plots with zero lead selling, direct WhatsApp support, and exclusive community lifestyle rewards.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-900 antialiased font-['Plus_Jakarta_Sans',sans-serif]">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
