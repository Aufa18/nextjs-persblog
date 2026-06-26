import Navbar from '@/components/Navbar';
import { Providers } from './providers';
import './globals.css';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Background utama menyesuaikan tema */}
      <body className="bg-background text-foreground">
        <Providers>
            <Navbar />
          <div className="max-w-300 mx-auto px-6 min-h-screen flex flex-col">
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}