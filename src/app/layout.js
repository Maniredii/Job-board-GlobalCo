import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import RouteProgress from '@/components/RouteProgress';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ToastProvider } from '@/components/Toast';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'JobSphere — Find Your Dream Job',
    template: '%s | JobSphere',
  },
  description: 'Discover thousands of job opportunities from top companies worldwide. Your next career move starts here.',
  keywords: ['jobs', 'career', 'hiring', 'remote work', 'job board', 'employment'],
  authors: [{ name: 'JobSphere' }],
  openGraph: {
    title: 'JobSphere — Find Your Dream Job',
    description: 'Discover thousands of job opportunities from top companies worldwide.',
    type: 'website',
    locale: 'en_US',
    siteName: 'JobSphere',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JobSphere — Find Your Dream Job',
    description: 'Discover thousands of job opportunities from top companies worldwide.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ToastProvider>
            <RouteProgress />
            <Navbar />
            <main style={{ minHeight: 'calc(100vh - var(--nav-height))' }}>
              {children}
            </main>
            <Footer />
            <BackToTop />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
