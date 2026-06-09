import './globals.css';

export const metadata = {
  title: 'Fortune DXB — Prototypes',
  description: 'Four independent redesign prototypes. Mock data only.',
};

// Root layout is intentionally minimal — each prototype defines its OWN
// theme, header and footer inside its own layout.jsx.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
