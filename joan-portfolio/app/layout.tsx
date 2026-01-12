import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Joan Immanuel Rodriquez | Portfolio',
  description: 'Web Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
