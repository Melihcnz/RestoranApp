import "./globals.css";

export const metadata = {
  title: "Restoran Uygulaması",
  description: "Restoran web uygulaması",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
