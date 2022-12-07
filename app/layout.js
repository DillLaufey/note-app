import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />

      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
