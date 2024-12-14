import "./globals.css";
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'Movie App',
  description: 'Next.js Movie Application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
