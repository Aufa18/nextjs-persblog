import Navbar from '@/components/Navbar';
import { Providers } from './providers';
import './globals.css';
import Footer from '@/components/Footer';
import { SidebarProvider } from '@/components/SidebarContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers>
          <SidebarProvider>
            <Navbar />
            <div className="max-w-300 mx-auto px-6 min-h-screen flex flex-col">
              <main className="grow">{children}</main>
              <Footer />
            </div>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}