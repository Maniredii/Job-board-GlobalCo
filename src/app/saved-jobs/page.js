'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { jobs } from '@/lib/data';
import JobCard from '@/components/JobCard';
import styles from './page.module.css';

const emptySubscribe = () => () => {};

export default function SavedJobsPage() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const savedJobs = mounted
    ? jobs.filter(job => {
        const savedIds = JSON.parse(localStorage.getItem('jobsphere-bookmarks') || '[]');
        return savedIds.includes(job.id);
      })
    : [];

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
