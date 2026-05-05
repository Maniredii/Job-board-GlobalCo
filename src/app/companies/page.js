import Link from 'next/link';
import { companies, getJobsByCompany } from '@/lib/data';
import styles from './page.module.css';

export const metadata = {
  title: 'Companies',
  description: 'Explore top companies hiring on JobSphere. Discover company profiles, culture, benefits, and open positions.',
};

export default function CompaniesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Top Companies</h1>
          <p className={styles.subtitle}>
            Discover {companies.length} industry-leading companies and their open positions
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            {companies.map((company) => {
              const jobCount = getJobsByCompany(company.id).length;
              return (
                <Link
                  href={`/companies/${company.id}`}
                  key={company.id}
                  className={styles.companyCard}
                  id={`company-${company.id}`}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.logo}>{company.logo}</span>
                    <div className={styles.cardInfo}>
                      <h2 className={styles.companyName}>{company.name}</h2>
                      <span className={styles.industry}>{company.industry}</span>
                    </div>
                    <span className={styles.rating}>⭐ {company.rating}</span>
                  </div>

                  <p className={styles.description}>{company.description}</p>

                  <div className={styles.tags}>
                    {company.culture.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className={styles.cardBottom}>
                    <div className={styles.meta}>
                      <span>📍 {company.location}</span>
                      <span>👥 {company.size}</span>
                    </div>
                    <span className={styles.jobCount}>
                      {jobCount} open {jobCount === 1 ? 'position' : 'positions'}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
