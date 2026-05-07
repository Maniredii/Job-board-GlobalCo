'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { getCompany, formatSalary, timeAgo } from '@/lib/data';
import { useTheme } from '@/components/ThemeProvider';
import styles from './JobCard.module.css';

const BorderGlow = dynamic(() => import('@/components/BorderGlow'), {
  ssr: false,
  loading: () => (
    <div style={{ borderRadius: 20, border: '1px solid var(--color-border, #e5e7eb)', overflow: 'hidden' }} />
  ),
});

export default function JobCard({ job, featured = false }) {
  const company = getCompany(job.company) || job.companyMeta;
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? '#131a27' : '#ffffff';
  const glowColors = featured
    ? ['#818cf8', '#06b6d4', '#a78bfa']
    : ['#6366f1', '#8b5cf6', '#06b6d4'];

  return (
    <BorderGlow
      edgeSensitivity={40}
      glowColor="240 70 70"
      backgroundColor={bgColor}
      borderRadius={20}
      glowRadius={30}
      glowIntensity={0.7}
      coneSpread={20}
      colors={glowColors}
      fillOpacity={0.3}
      className={styles.glowWrapper}
    >
      <Link href={`/jobs/${job.id}`} className={`${styles.card} ${featured ? styles.featured : ''}`} id={`job-card-${job.id}`}>
        {featured && <div className={styles.featuredBadge}>⭐ Featured</div>}

        <div className={styles.header}>
          <div className={styles.companyLogo}>
            {company?.logo ? (
              <Image src={company.logo} alt={company.name || ''} width={32} height={32} />
            ) : (
              <div style={{ width: 32, height: 32, background: 'var(--color-bg-secondary)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
                🏢
              </div>
            )}
          </div>
          <div className={styles.headerInfo}>
            <span className={styles.companyName}>{company?.name}</span>
            <span className={styles.posted}>{timeAgo(job.postedDate)}</span>
          </div>
        </div>

        <h3 className={styles.title}>{job.title}</h3>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            {job.location}
          </span>
          <span className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            {job.type}
          </span>
          <span className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            {formatSalary(job.salary)}
          </span>
        </div>

        <div className={styles.tags}>
          <span className={`badge ${job.remote === 'Remote' ? 'badge-success' : job.remote === 'Hybrid' ? 'badge-warning' : 'badge-secondary'}`}>
            {job.remote}
          </span>
          <span className="badge badge-primary">{job.level}</span>
          {job.passoutYear && (
            <span className="badge badge-secondary">🎓 {job.passoutYear}</span>
          )}
          {job.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="tag">{skill}</span>
          ))}
          {job.skills.length > 3 && (
            <span className="tag">+{job.skills.length - 3}</span>
          )}
        </div>

        <div className={styles.footer}>
          <span className={styles.applicants}>{job.applicants} applicants</span>
          <span className={styles.viewBtn}>View Details →</span>
        </div>
      </Link>
    </BorderGlow>
  );
}
