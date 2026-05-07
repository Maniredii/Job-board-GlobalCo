import Link from 'next/link';
import Image from 'next/image';
import { companies, getCompany, getJobsByCompany } from '@/lib/data';
import JobCard from '@/components/JobCard';
import styles from './page.module.css';

export async function generateStaticParams() {
  return companies.map((company) => ({
    id: company.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const company = getCompany(id);
  if (!company) return { title: 'Company Not Found' };
  return {
    title: `${company.name} — Company Profile & Jobs`,
    description: company.description,
  };
}

export default async function CompanyDetailPage({ params }) {
  const { id } = await params;
  const company = getCompany(id);

  if (!company) {
    return (
      <div className={styles.notFound}>
        <h1>Company Not Found</h1>
        <Link href="/companies" className="btn btn-primary">Browse Companies</Link>
      </div>
    );
  }

  const companyJobs = getJobsByCompany(id);

  return (
    <div className={styles.page}>
      {/* Company Header */}
      <section className={styles.header}>
        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/companies">Companies</Link>
            <span>/</span>
            <span>{company.name}</span>
          </nav>

          <div className={styles.headerContent}>
            <span className={styles.logo}><Image src={company.logo} alt={company.name} width={56} height={56} /></span>
            <div className={styles.headerInfo}>
              <h1 className={styles.companyName}>{company.name}</h1>
              <p className={styles.companyTagline}>{company.industry} · Founded {company.founded} · {company.location}</p>
              <div className={styles.headerMeta}>
                <span className={styles.rating}>⭐ {company.rating} ({company.reviewCount.toLocaleString()} reviews)</span>
                <span className={styles.size}>👥 {company.size} employees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className={styles.layout}>
          {/* Main Content */}
          <main className={styles.main}>
            {/* About */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>About {company.name}</h2>
              <p className={styles.description}>{company.description}</p>
            </section>

            {/* Culture */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Company Culture</h2>
              <div className={styles.cultureGrid}>
                {company.culture.map((value) => (
                  <div key={value} className={styles.cultureCard}>
                    <span className={styles.cultureIcon}>✦</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Benefits & Perks</h2>
              <div className={styles.benefitsGrid}>
                {company.benefits.map((benefit) => (
                  <div key={benefit} className={styles.benefitItem}>
                    <span className={styles.benefitIcon}>✓</span>
                    {benefit}
                  </div>
                ))}
              </div>
            </section>

            {/* Open Positions */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Open Positions ({companyJobs.length})
              </h2>
              {companyJobs.length > 0 ? (
                <div className={styles.jobsList}>
                  {companyJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <p className={styles.noJobs}>No open positions at the moment.</p>
              )}
            </section>
          </main>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>Company Info</h3>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Website</span>
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className={styles.infoLink}>{company.website.replace('https://', '')}</a>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Industry</span>
                  <span>{company.industry}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Size</span>
                  <span>{company.size}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Founded</span>
                  <span>{company.founded}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Location</span>
                  <span>{company.location}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
