import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Banyans Craft Kitchen + Lounge | Kailua',
  description: 'Globally inspired, locally sourced. Kailua’s craft kitchen and lounge.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
