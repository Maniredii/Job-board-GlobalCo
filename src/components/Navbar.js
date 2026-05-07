'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/jobs', label: 'Find Jobs' },
    { href: '/companies', label: 'Companies' },
    { href: '/saved-jobs', label: 'Saved Jobs' },
    { href: '/post-job', label: 'Post a Job' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} id="nav-logo">
          <span className={styles.logoIcon}>◆</span>
          <span className={styles.logoText}>Job<span className={styles.logoAccent}>Sphere</span></span>
        </Link>

        <div className={`${styles.navLinks} ${mobileOpen ? styles.mobileOpen : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.label}
              {pathname === link.href && <span className={styles.activeIndicator} />}
            </Link>
          ))}
        </div>

        <div className={styles.navActions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            id="theme-toggle"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            <div className={styles.themeIconWrapper}>
              <svg
                className={`${styles.themeIcon} ${theme === 'light' ? styles.themeIconActive : ''}`}
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              <svg
                className={`${styles.themeIcon} ${theme === 'dark' ? styles.themeIconActive : ''}`}
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" /><path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" /><path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
              </svg>
            </div>
          </button>
          <Link href="/post-job" className={`btn btn-primary btn-sm ${styles.postJobBtn}`} id="nav-post-job-btn">
            Post a Job
          </Link>
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMobileOpen(false)} />
      )}
    </header>
  );
}
