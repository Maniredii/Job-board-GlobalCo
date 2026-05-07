'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { jobs, getCompany, formatSalary } from '@/lib/data';
import Link from 'next/link';
import styles from './SkillMatch.module.css';

const POPULAR_SKILLS = [
  'React', 'Python', 'JavaScript', 'TypeScript', 'Node.js',
  'Java', 'SQL', 'Docker', 'AWS', 'Figma',
  'Machine Learning', 'Kubernetes', 'CSS', 'GraphQL',
];

export default function SkillMatch() {
  const [inputValue, setInputValue] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [matchedJobs, setMatchedJobs] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const addSkill = (skill) => {
    const normalized = skill.trim();
    if (normalized && !selectedSkills.includes(normalized)) {
      setSelectedSkills(prev => [...prev, normalized]);
    }
    setInputValue('');
  };

  const removeSkill = (skill) => {
    setSelectedSkills(prev => prev.filter(s => s !== skill));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      addSkill(inputValue);
    }
  };

  const findMatches = () => {
    if (selectedSkills.length === 0) return;

    const scored = jobs.map(job => {
      const jobSkillsLower = job.skills.map(s => s.toLowerCase());
      const matchCount = selectedSkills.filter(s =>
        jobSkillsLower.includes(s.toLowerCase())
      ).length;
      const matchPercent = Math.round((matchCount / selectedSkills.length) * 100);
      return { ...job, matchCount, matchPercent };
    })
    .filter(j => j.matchCount > 0)
    .sort((a, b) => b.matchPercent - a.matchPercent || b.matchCount - a.matchCount);

    setMatchedJobs(scored.slice(0, 6));
    setHasSearched(true);
  };

  return (
    <section className={styles.section} id="skill-match">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>🎯 Find Jobs Matching Your Skills</h2>
          <p className={styles.subtitle}>Enter your skills and we&apos;ll show the most relevant jobs for you</p>
        </div>

        <div className={styles.inputArea}>
          <div className={styles.skillInput}>
            <div className={styles.selectedSkills}>
              {selectedSkills.map(skill => (
                <span key={skill} className={styles.skillChip}>
                  {skill}
                  <button onClick={() => removeSkill(skill)} className={styles.chipRemove}>✕</button>
                </span>
              ))}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={selectedSkills.length === 0 ? 'Type a skill and press Enter...' : 'Add more skills...'}
                className={styles.textInput}
                id="skill-match-input"
              />
            </div>
          </div>

          <button onClick={findMatches} className={styles.matchBtn} disabled={selectedSkills.length === 0} id="skill-match-btn">
            Find Matching Jobs
          </button>
        </div>

        <div className={styles.popularSkills}>
          <span className={styles.popularLabel}>Popular:</span>
          {POPULAR_SKILLS.filter(s => !selectedSkills.includes(s)).slice(0, 8).map(skill => (
            <button key={skill} onClick={() => addSkill(skill)} className={styles.popularChip}>
              + {skill}
            </button>
          ))}
        </div>

        {hasSearched && (
          <div className={styles.results}>
            {matchedJobs.length > 0 ? (
              <div className={styles.resultGrid}>
                {matchedJobs.map(job => {
                  const company = getCompany(job.company);
                  return (
                    <Link href={`/jobs/${job.id}`} key={job.id} className={styles.resultCard}>
                      <div className={styles.matchBadge}>{job.matchPercent}% match</div>
                      <h4 className={styles.resultTitle}>{job.title}</h4>
                      <p className={styles.resultCompany}>{company?.name} · {job.location}</p>
                      <p className={styles.resultSalary}>{formatSalary(job.salary)}</p>
                      <div className={styles.resultSkills}>
                        {job.skills.map(s => (
                          <span
                            key={s}
                            className={`${styles.resultSkillTag} ${selectedSkills.some(sel => sel.toLowerCase() === s.toLowerCase()) ? styles.matched : ''}`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className={styles.noResults}>
                <span>😕</span>
                <p>No jobs matched your skills. Try different or broader skills.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
