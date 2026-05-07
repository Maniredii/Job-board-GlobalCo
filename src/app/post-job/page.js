'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { categories, indianCities, addJob } from '@/lib/data';
import styles from './page.module.css';

export default function PostJobPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [locationQuery, setLocationQuery] = useState('');
  const [showLocSuggestions, setShowLocSuggestions] = useState(false);
  const locRef = useRef(null);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    category: '',
    type: 'Full-time',
    level: 'Mid',
    location: '',
    remote: 'Hybrid',
    salaryMin: '',
    salaryMax: '',
    passoutYear: '',
    description: '',
    requirements: '',
    responsibilities: '',
    skills: '',
    benefits: '',
    companyDescription: '',
    companyWebsite: '',
    contactEmail: '',
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (locRef.current && !locRef.current.contains(e.target)) {
        setShowLocSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLocationChange = (e) => {
    const val = e.target.value;
    setLocationQuery(val);
    updateField('location', val);
    setShowLocSuggestions(val.trim().length > 0);
  };

  const selectLocation = (city, state) => {
    const loc = `${city}, ${state}`;
    setLocationQuery(loc);
    updateField('location', loc);
    setShowLocSuggestions(false);
  };

  const filteredCities = locationQuery.trim().length > 0
    ? indianCities.filter(c =>
        c.city.toLowerCase().includes(locationQuery.toLowerCase()) ||
        c.state.toLowerCase().includes(locationQuery.toLowerCase())
      ).slice(0, 6)
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(formData);
    setSubmitted(true);
  };

  const totalSteps = 3;

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.successCard}>
            <span className={styles.successIcon}>🎉</span>
            <h1>Job Posted Successfully!</h1>
            <p>Your job listing for <strong>{formData.title}</strong> is now live and visible on the jobs page.</p>
            <div className={styles.successActions}>
              <button className="btn btn-primary btn-lg" onClick={() => router.push('/jobs')}>
                View All Jobs
              </button>
              <button className="btn btn-secondary btn-lg" onClick={() => { setSubmitted(false); setStep(1); setLocationQuery(''); setFormData({
                title: '', company: '', category: '', type: 'Full-time', level: 'Mid',
                location: '', remote: 'Hybrid', salaryMin: '', salaryMax: '', passoutYear: '',
                description: '', requirements: '', responsibilities: '', skills: '', benefits: '',
                companyDescription: '', companyWebsite: '', contactEmail: '',
              }); }}>
                Post Another Job
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Post a Job</h1>
          <p className={styles.subtitle}>Reach thousands of qualified candidates across India. Fill out the form below to get started.</p>
        </div>
      </section>

      <div className="container">
        <div className={styles.layout}>
          {/* Progress */}
          <div className={styles.progress}>
            {[1, 2, 3].map((s) => (
              <div key={s} className={`${styles.progressStep} ${s <= step ? styles.active : ''} ${s < step ? styles.completed : ''}`}>
                <div className={styles.progressCircle}>
                  {s < step ? '✓' : s}
                </div>
                <span className={styles.progressLabel}>
                  {s === 1 ? 'Job Details' : s === 2 ? 'Description' : 'Company Info'}
                </span>
              </div>
            ))}
            <div className={styles.progressBar}>
              <div className={styles.progressBarFill} style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }} />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Step 1: Job Details */}
            {step === 1 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Job Details</h2>
                <p className={styles.stepSubtitle}>Basic information about the position</p>

                <div className={styles.formGrid}>
                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Job Title *</label>
                    <input type="text" className="input" placeholder="e.g. Senior Frontend Engineer" required value={formData.title} onChange={(e) => updateField('title', e.target.value)} id="post-title" />
                  </div>

                  <div className="input-group">
                    <label>Category *</label>
                    <select className="input" required value={formData.category} onChange={(e) => updateField('category', e.target.value)} id="post-category">
                      <option value="">Select category</option>
                      {categories.map(c => (
                        <option key={c.id} value={c.id}>{c.icon} {c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="input-group">
                    <label>Job Type *</label>
                    <select className="input" value={formData.type} onChange={(e) => updateField('type', e.target.value)} id="post-type">
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label>Experience Level *</label>
                    <select className="input" value={formData.level} onChange={(e) => updateField('level', e.target.value)} id="post-level">
                      <option value="Intern">Intern</option>
                      <option value="Entry Level">Entry Level</option>
                      <option value="Junior">Junior</option>
                      <option value="Mid">Mid-Level</option>
                      <option value="Senior">Senior</option>
                      <option value="Lead">Lead</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label>Work Mode *</label>
                    <select className="input" value={formData.remote} onChange={(e) => updateField('remote', e.target.value)} id="post-remote">
                      <option value="Remote">Remote</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="On-site">On-site</option>
                    </select>
                  </div>

                  <div className="input-group" style={{ gridColumn: '1 / -1', position: 'relative' }} ref={locRef}>
                    <label>Location * (Indian cities only)</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Search city or state... e.g. Bengaluru, Mumbai"
                      required
                      value={locationQuery}
                      onChange={handleLocationChange}
                      onFocus={() => locationQuery.trim().length > 0 && setShowLocSuggestions(true)}
                      id="post-location"
                      autoComplete="off"
                    />
                    {showLocSuggestions && filteredCities.length > 0 && (
                      <ul style={{
                        position: 'absolute', top: '100%', left: 0, right: 0,
                        background: 'var(--color-bg-card)', border: '1px solid var(--color-border)',
                        borderRadius: '12px', listStyle: 'none', padding: '0.5rem 0', margin: 0,
                        zIndex: 100, boxShadow: 'var(--shadow-lg)',
                      }}>
                        {filteredCities.map((c, i) => (
                          <li key={i} onClick={() => selectLocation(c.city, c.state)}
                            style={{
                              padding: '0.6rem 1rem', cursor: 'pointer',
                              transition: 'background 0.15s',
                            }}
                            onMouseEnter={(e) => e.target.style.background = 'var(--color-bg-secondary)'}
                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                          >
                            📍 {c.city}, <span style={{ color: 'var(--color-text-secondary)' }}>{c.state}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="input-group">
                    <label>Min Salary (₹) *</label>
                    <input type="number" className="input" placeholder="e.g. 1500000" required value={formData.salaryMin} onChange={(e) => updateField('salaryMin', e.target.value)} id="post-salary-min" />
                  </div>

                  <div className="input-group">
                    <label>Max Salary (₹) *</label>
                    <input type="number" className="input" placeholder="e.g. 3000000" required value={formData.salaryMax} onChange={(e) => updateField('salaryMax', e.target.value)} id="post-salary-max" />
                  </div>

                  <div className="input-group">
                    <label>Year of Passout</label>
                    <select className="input" value={formData.passoutYear} onChange={(e) => updateField('passoutYear', e.target.value)} id="post-passout-year">
                      <option value="">Select year</option>
                      {['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018'].map(y => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.formActions}>
                  <div />
                  <button type="button" className="btn btn-primary btn-lg" onClick={() => setStep(2)} id="post-next-1">
                    Next: Description →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Description */}
            {step === 2 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Job Description</h2>
                <p className={styles.stepSubtitle}>Provide details to attract the right candidates</p>

                <div className={styles.formGrid}>
                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Job Description *</label>
                    <textarea className="input" rows={6} placeholder="Describe the role, team, and what makes this opportunity exciting..." required value={formData.description} onChange={(e) => updateField('description', e.target.value)} id="post-description" style={{ resize: 'vertical' }} />
                  </div>

                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Requirements * (one per line)</label>
                    <textarea className="input" rows={5} placeholder={"5+ years of React experience\nStrong TypeScript skills\n..."} required value={formData.requirements} onChange={(e) => updateField('requirements', e.target.value)} id="post-requirements" style={{ resize: 'vertical' }} />
                  </div>

                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Responsibilities * (one per line)</label>
                    <textarea className="input" rows={5} placeholder={"Lead frontend architecture decisions\nMentor junior developers\n..."} required value={formData.responsibilities} onChange={(e) => updateField('responsibilities', e.target.value)} id="post-responsibilities" style={{ resize: 'vertical' }} />
                  </div>

                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Required Skills (comma-separated)</label>
                    <input type="text" className="input" placeholder="React, TypeScript, Node.js, GraphQL..." value={formData.skills} onChange={(e) => updateField('skills', e.target.value)} id="post-skills" />
                  </div>

                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Benefits & Perks (comma-separated)</label>
                    <input type="text" className="input" placeholder="Health Insurance, PF, Remote Work, ESOPs..." value={formData.benefits} onChange={(e) => updateField('benefits', e.target.value)} id="post-benefits" />
                  </div>
                </div>

                <div className={styles.formActions}>
                  <button type="button" className="btn btn-secondary btn-lg" onClick={() => setStep(1)}>
                    ← Back
                  </button>
                  <button type="button" className="btn btn-primary btn-lg" onClick={() => setStep(3)} id="post-next-2">
                    Next: Company Info →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Company Info */}
            {step === 3 && (
              <div className={styles.formStep}>
                <h2 className={styles.stepTitle}>Company Information</h2>
                <p className={styles.stepSubtitle}>Tell candidates about your company</p>

                <div className={styles.formGrid}>
                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Company Name *</label>
                    <input type="text" className="input" placeholder="e.g. Infosys, TCS, Startup Co" required value={formData.company} onChange={(e) => updateField('company', e.target.value)} id="post-company" />
                  </div>

                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Company Website</label>
                    <input type="url" className="input" placeholder="https://example.com" value={formData.companyWebsite} onChange={(e) => updateField('companyWebsite', e.target.value)} id="post-website" />
                  </div>

                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Company Description</label>
                    <textarea className="input" rows={4} placeholder="Brief description of your company..." value={formData.companyDescription} onChange={(e) => updateField('companyDescription', e.target.value)} id="post-company-desc" style={{ resize: 'vertical' }} />
                  </div>

                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Contact Email *</label>
                    <input type="email" className="input" placeholder="hr@company.com" required value={formData.contactEmail} onChange={(e) => updateField('contactEmail', e.target.value)} id="post-email" />
                  </div>
                </div>

                <div className={styles.formActions}>
                  <button type="button" className="btn btn-secondary btn-lg" onClick={() => setStep(2)}>
                    ← Back
                  </button>
                  <button type="submit" className="btn btn-primary btn-lg" id="post-submit">
                    🚀 Publish Job
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
