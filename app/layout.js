import './globals.css';

export const metadata = {
  title: 'SalesDendrite — Sales Execution Intelligence Platform',
  description: 'Map the org. Own the deal. SalesDendrite maps organizational hierarchies, layers intelligence, and generates AI-powered sales execution outputs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
