'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SearchBar.module.css';

export default function SearchBar({ variant = 'hero' }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set('query', query);
    if (location) params.set('location', location);
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.searchBar} ${styles[variant]}`} id="search-bar">
      <div className={styles.inputWrapper}>
        <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input
          type="text"
          placeholder="Job title, keyword, or company..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
          id="search-query-input"
        />
      </div>
      <div className={styles.divider} />
      <div className={styles.inputWrapper}>
        <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <input
          type="text"
          placeholder="City, state, or remote..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={styles.input}
          id="search-location-input"
        />
      </div>
      <button type="submit" className={styles.searchBtn} id="search-submit-btn">
        Search Jobs
      </button>
    </form>
  );
}
