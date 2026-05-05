import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>◆</span>
              <span>Job<span className={styles.logoAccent}>Sphere</span></span>
            </Link>
            <p className={styles.description}>
              Your gateway to the best career opportunities. Connect with top companies and find your dream job today.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="Twitter">𝕏</a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">in</a>
              <a href="#" className={styles.socialLink} aria-label="GitHub">⌘</a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>For Job Seekers</h4>
            <Link href="/jobs" className={styles.link}>Browse Jobs</Link>
            <Link href="/companies" className={styles.link}>Companies</Link>
            <Link href="/jobs?remote=Remote" className={styles.link}>Remote Jobs</Link>
            <Link href="/jobs?level=Senior" className={styles.link}>Senior Positions</Link>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>For Employers</h4>
            <Link href="/post-job" className={styles.link}>Post a Job</Link>
            <a href="#" className={styles.link}>Pricing</a>
            <a href="#" className={styles.link}>Employer Dashboard</a>
            <a href="#" className={styles.link}>Talent Search</a>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Resources</h4>
            <a href="#" className={styles.link}>Career Blog</a>
            <a href="#" className={styles.link}>Resume Tips</a>
            <a href="#" className={styles.link}>Salary Guide</a>
            <a href="#" className={styles.link}>Help Center</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} JobSphere. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Privacy Policy</a>
            <a href="#" className={styles.bottomLink}>Terms of Service</a>
            <a href="#" className={styles.bottomLink}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
