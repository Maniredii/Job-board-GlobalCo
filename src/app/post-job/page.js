'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/data';
import styles from './page.module.css';

export default function PostJobPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
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
    currency: 'USD',
    description: '',
    requirements: '',
    responsibilities: '',
    skills: '',
    benefits: '',
    companyDescription: '',
    companyWebsite: '',
    contactEmail: '',
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 600);
  };

  const totalSteps = 3;

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.successCard}>
            <span className={styles.successIcon}>🎉</span>
            <h1>Job Posted Successfully!</h1>
            <p>Your job listing for <strong>{formData.title}</strong> has been submitted for review. It will be live within 24 hours.</p>
            <div className={styles.successActions}>
              <button className="btn btn-primary btn-lg" onClick={() => { setSubmitted(false); setStep(1); setFormData({
                title: '', company: '', category: '', type: 'Full-time', level: 'Mid',
                location: '', remote: 'Hybrid', salaryMin: '', salaryMax: '', currency: 'USD',
                description: '', requirements: '', responsibilities: '', skills: '', benefits: '',
                companyDescription: '', companyWebsite: '', contactEmail: '',
              }); }}>
                Post Another Job
              </button>
              <Link href="/jobs" className="btn btn-secondary btn-lg">View All Jobs</Link>
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
          <p className={styles.subtitle}>Reach thousands of qualified candidates. Fill out the form below to get started.</p>
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

                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Location *</label>
                    <input type="text" className="input" placeholder="e.g. San Francisco, CA" required value={formData.location} onChange={(e) => updateField('location', e.target.value)} id="post-location" />
                  </div>

                  <div className="input-group">
                    <label>Min Salary *</label>
                    <input type="number" className="input" placeholder="e.g. 120000" required value={formData.salaryMin} onChange={(e) => updateField('salaryMin', e.target.value)} id="post-salary-min" />
                  </div>

                  <div className="input-group">
                    <label>Max Salary *</label>
                    <input type="number" className="input" placeholder="e.g. 180000" required value={formData.salaryMax} onChange={(e) => updateField('salaryMax', e.target.value)} id="post-salary-max" />
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
                    <textarea className="input" rows={5} placeholder="5+ years of React experience&#10;Strong TypeScript skills&#10;..." required value={formData.requirements} onChange={(e) => updateField('requirements', e.target.value)} id="post-requirements" style={{ resize: 'vertical' }} />
                  </div>

                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Responsibilities * (one per line)</label>
                    <textarea className="input" rows={5} placeholder="Lead frontend architecture decisions&#10;Mentor junior developers&#10;..." required value={formData.responsibilities} onChange={(e) => updateField('responsibilities', e.target.value)} id="post-responsibilities" style={{ resize: 'vertical' }} />
                  </div>

                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Required Skills (comma-separated)</label>
                    <input type="text" className="input" placeholder="React, TypeScript, Node.js, GraphQL..." value={formData.skills} onChange={(e) => updateField('skills', e.target.value)} id="post-skills" />
                  </div>

                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Benefits & Perks (comma-separated)</label>
                    <input type="text" className="input" placeholder="Health Insurance, 401(k), Remote Work, Equity..." value={formData.benefits} onChange={(e) => updateField('benefits', e.target.value)} id="post-benefits" />
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
                    <input type="text" className="input" placeholder="e.g. Acme Corp" required value={formData.company} onChange={(e) => updateField('company', e.target.value)} id="post-company" />
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
