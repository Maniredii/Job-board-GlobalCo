'use client';

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getJobWithCompany, formatSalary, timeAgo, getJobsByCompany, getJobsByCategory, getCompany } from '@/lib/data';
import ApplyButton from '@/components/ApplyButton';
import BookmarkButton from '@/components/BookmarkButton';
import ShareJob from '@/components/ShareJob';
import styles from './page.module.css';

export default function JobDetailPage({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  
  const [jobData, setJobData] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setJobData(getJobWithCompany(id));
    setMounted(true);
  }, [id]);

  if (!mounted) return <div style={{ padding: '4rem', textAlign: 'center' }}>Loading job details...</div>;

  if (!jobData) {
    return (
      <div className={styles.notFound}>
        <h1>Job Not Found</h1>
        <p>The job you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/jobs" className="btn btn-primary">Browse Jobs</Link>
      </div>
    );
  }

  const company = jobData.companyData;
  const relatedJobs = getJobsByCompany(jobData.company).filter(j => j.id !== jobData.id).slice(0, 3);
  const similarJobs = getJobsByCategory(jobData.category).filter(j => j.id !== jobData.id).slice(0, 3);

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <div className="container">
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/jobs">Jobs</Link>
          <span>/</span>
          <span className={styles.breadcrumbCurrent}>{jobData.title}</span>
        </nav>
      </div>

      <div className="container">
        <div className={styles.layout}>
          {/* Main Content */}
          <article className={styles.main}>
            {/* Job Header */}
            <div className={styles.jobHeader}>
              <div className={styles.headerTop}>
                <div className={styles.companyLogo}>
                  {company?.logo ? (
                    <Image src={company.logo} alt={company.name || ''} width={48} height={48} />
                  ) : (
                    <div style={{ width: 48, height: 48, background: 'var(--color-bg-secondary)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🏢</div>
                  )}
                </div>
                <div className={styles.headerInfo}>
                  <Link href={`/companies/${company?.id}`} className={styles.companyLink}>
                    {company?.name}
                  </Link>
                  <h1 className={styles.jobTitle}>{jobData.title}</h1>
                  <div className={styles.jobMeta}>
                    <span className={styles.metaItem}>
                      📍 {jobData.location}
                    </span>
                    <span className={styles.metaItem}>
                      💼 {jobData.type}
                    </span>
                    <span className={styles.metaItem}>
                      💰 {formatSalary(jobData.salary)}
                    </span>
                    <span className={styles.metaItem}>
                      📅 {timeAgo(jobData.postedDate)}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.headerTags}>
                {jobData.userPosted && (
                  <span className="badge badge-warning">👤 User Posted</span>
                )}
                <span className={`badge ${jobData.remote === 'Remote' ? 'badge-success' : jobData.remote === 'Hybrid' ? 'badge-warning' : 'badge-secondary'}`}>
                  {jobData.remote}
                </span>
                <span className="badge badge-primary">{jobData.level}</span>
                <span className="badge badge-info">{jobData.category}</span>
                {jobData.passoutYear && (
                  <span className="badge badge-secondary">🎓 Batch of {jobData.passoutYear}</span>
                )}
              </div>

              <div className={styles.headerActions}>
                <ApplyButton jobTitle={jobData.title} companyName={company?.name} />
                <BookmarkButton jobId={jobData.id} />
                <ShareJob jobTitle={jobData.title} jobId={jobData.id} />
              </div>
            </div>

            {/* Job Description */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Job Description</h2>
              <div className={styles.description}>
                {jobData.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Requirements</h2>
              <ul className={styles.list}>
                {jobData.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </section>

            {/* Responsibilities */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Responsibilities</h2>
              <ul className={styles.list}>
                {jobData.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </section>

            {/* Skills */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Required Skills</h2>
              <div className={styles.skills}>
                {jobData.skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Benefits & Perks</h2>
              <div className={styles.benefits}>
                {jobData.benefits.map((benefit) => (
                  <div key={benefit} className={styles.benefitItem}>
                    <span className={styles.benefitIcon}>✓</span>
                    {benefit}
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Company Card */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>About the Company</h3>
              <Link href={`/companies/${company?.id}`} className={styles.companyCardLink}>
                <div className={styles.companyCardLogo}>
                  {company?.logo ? (
                    <Image src={company.logo} alt={company.name || ''} width={40} height={40} />
                  ) : (
                    <div style={{ width: 40, height: 40, background: 'var(--color-bg-secondary)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🏢</div>
                  )}
                </div>
                <span className={styles.companyCardName}>{company?.name}</span>
              </Link>
              <p className={styles.companyCardDesc}>{company?.description}</p>
              <div className={styles.companyCardMeta}>
                <div className={styles.companyCardMetaItem}>
                  <span className={styles.companyCardMetaLabel}>Industry</span>
                  <span>{company?.industry}</span>
                </div>
                <div className={styles.companyCardMetaItem}>
                  <span className={styles.companyCardMetaLabel}>Company Size</span>
                  <span>{company?.size}</span>
                </div>
                <div className={styles.companyCardMetaItem}>
                  <span className={styles.companyCardMetaLabel}>Founded</span>
                  <span>{company?.founded}</span>
                </div>
                <div className={styles.companyCardMetaItem}>
                  <span className={styles.companyCardMetaLabel}>Rating</span>
                  <span>⭐ {company?.rating} ({company?.reviewCount.toLocaleString()} reviews)</span>
                </div>
              </div>
              <Link href={`/companies/${company?.id}`} className="btn btn-secondary" style={{ width: '100%' }}>
                View Company Profile →
              </Link>
            </div>

            {/* Job Stats */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>Job Overview</h3>
              <div className={styles.companyCardMeta}>
                <div className={styles.companyCardMetaItem}>
                  <span className={styles.companyCardMetaLabel}>Posted</span>
                  <span>{new Date(jobData.postedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className={styles.companyCardMetaItem}>
                  <span className={styles.companyCardMetaLabel}>Deadline</span>
                  <span>{new Date(jobData.deadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className={styles.companyCardMetaItem}>
                  <span className={styles.companyCardMetaLabel}>Applicants</span>
                  <span>{jobData.applicants} applied</span>
                </div>
                <div className={styles.companyCardMetaItem}>
                  <span className={styles.companyCardMetaLabel}>Salary Range</span>
                  <span>{formatSalary(jobData.salary)}</span>
                </div>
              </div>
            </div>

            {/* Related Jobs */}
            {relatedJobs.length > 0 && (
              <div className={styles.sideCard}>
                <h3 className={styles.sideCardTitle}>More Jobs at {company?.name}</h3>
                <div className={styles.relatedJobs}>
                  {relatedJobs.map((job) => (
                    <Link key={job.id} href={`/jobs/${job.id}`} className={styles.relatedJob}>
                      <span className={styles.relatedJobTitle}>{job.title}</span>
                      <span className={styles.relatedJobMeta}>{job.type} • {job.remote}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Similar Jobs */}
            {similarJobs.length > 0 && (
              <div className={styles.sideCard}>
                <h3 className={styles.sideCardTitle}>Similar Jobs in {jobData.category}</h3>
                <div className={styles.relatedJobs}>
                  {similarJobs.map((job) => {
                    const jobCompany = getCompany(job.company);
                    return (
                      <Link key={job.id} href={`/jobs/${job.id}`} className={styles.relatedJob}>
                        <span className={styles.relatedJobTitle}>{job.title}</span>
                        <span className={styles.relatedJobMeta}>{jobCompany?.name} • {job.location}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
