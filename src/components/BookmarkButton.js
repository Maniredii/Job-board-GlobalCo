'use client';

import { useState, useEffect } from 'react';
import styles from './BookmarkButton.module.css';

export default function BookmarkButton({ jobId }) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('jobsphere-bookmarks') || '[]');
    setBookmarked(saved.includes(jobId));
  }, [jobId]);

  const toggleBookmark = () => {
    const saved = JSON.parse(localStorage.getItem('jobsphere-bookmarks') || '[]');
    let updated;
    if (saved.includes(jobId)) {
      updated = saved.filter((id) => id !== jobId);
    } else {
      updated = [...saved, jobId];
    }
    localStorage.setItem('jobsphere-bookmarks', JSON.stringify(updated));
    setBookmarked(!bookmarked);
  };

  return (
    <button
      className={`${styles.bookmarkBtn} ${bookmarked ? styles.active : ''}`}
      onClick={toggleBookmark}
      aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark this job'}
      id="bookmark-btn"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={bookmarked ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      </svg>
      {bookmarked ? 'Saved' : 'Save Job'}
    </button>
  );
}
