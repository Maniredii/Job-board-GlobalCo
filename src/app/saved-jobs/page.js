'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { jobs } from '@/lib/data';
import JobCard from '@/components/JobCard';
import styles from './page.module.css';

export default function SavedJobsPage() {
  const [savedJobs, setSavedJobs] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedIds = JSON.parse(localStorage.getItem('jobsphere-bookmarks') || '[]');
    const filtered = jobs.filter(job => savedIds.includes(job.id));
    setSavedJobs(filtered);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Saved Jobs</h1>
          <p className={styles.description}>Manage your bookmarked job opportunities</p>
        </div>

        {savedJobs.length > 0 ? (
          <div className={styles.grid}>
            {savedJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h2>No saved jobs yet</h2>
            <p>Jobs you bookmark will appear here for easy access later.</p>
            <br />
            <Link href="/jobs" className="btn btn-primary">
              Browse Jobs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
