'use client';

import { useState } from 'react';
import { useToast } from '@/components/Toast';
import styles from './ApplyButton.module.css';

export default function ApplyButton({ jobTitle, companyName }) {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      addToast(`🎉 Application submitted for ${jobTitle}!`, 'success');
    }, 800);
  };

  return (
    <>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => setShowModal(true)}
        id="apply-now-btn"
      >
        Apply Now
      </button>

      {showModal && (
        <>
          <div className={styles.backdrop} onClick={() => setShowModal(false)} />
          <div className={styles.modal}>
            {submitted ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>🎉</span>
                <h2>Application Submitted!</h2>
                <p>Your application for <strong>{jobTitle}</strong> at <strong>{companyName}</strong> has been submitted successfully.</p>
                <p className={styles.successNote}>You&apos;ll receive a confirmation email shortly.</p>
                <button className="btn btn-primary" onClick={() => { setShowModal(false); setSubmitted(false); }}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className={styles.modalHeader}>
                  <h2>Apply for {jobTitle}</h2>
                  <p>at {companyName}</p>
                  <button className={styles.closeBtn} onClick={() => setShowModal(false)}>✕</button>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className="input-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      id="apply-name-input"
                    />
                  </div>
                  <div className="input-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      className="input"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      id="apply-email-input"
                    />
                  </div>
                  <div className="input-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      className="input"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      id="apply-phone-input"
                    />
                  </div>
                  <div className="input-group">
                    <label>Resume *</label>
                    <div className={styles.fileUpload}>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
                        id="apply-resume-input"
                      />
                      <span className={styles.fileUploadText}>
                        {formData.resume ? formData.resume.name : 'Click to upload PDF, DOC, or DOCX'}
                      </span>
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Cover Letter</label>
                    <textarea
                      className="input"
                      rows={4}
                      placeholder="Tell us why you're a great fit for this role..."
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                      id="apply-cover-letter-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} id="apply-submit-btn">
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
