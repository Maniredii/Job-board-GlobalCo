import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedJobs, categories, getStats, companies } from '@/lib/data';
import JobCard from '@/components/JobCard';
import SearchBar from '@/components/SearchBar';
import GlowCard from '@/components/GlowCard';
import styles from './page.module.css';

export default function Home() {
  const featuredJobs = getFeaturedJobs();
  const stats = getStats();

  const statItems = [
    { value: `${stats.totalJobs}+`, label: 'Active Jobs' },
    { value: `${stats.totalCompanies}+`, label: 'Top Companies' },
    { value: `${stats.totalApplicants.toLocaleString()}+`, label: 'Job Seekers' },
    { value: `${stats.remoteJobs}+`, label: 'Remote Jobs' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGlow1} />
          <div className={styles.heroGlow2} />
          <div className={styles.heroGrid} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            🚀 Over {stats.totalApplicants.toLocaleString()}+ active job seekers
          </div>
          <h1 className={styles.heroTitle}>
            Find Your <span className={styles.heroGradient}>Dream Job</span><br />
            At Top Companies
          </h1>
          <p className={styles.heroSubtitle}>
            Discover {stats.totalJobs}+ curated opportunities from {stats.totalCompanies} leading companies.
            Your next career move starts here.
          </p>
          <SearchBar />
          <div className={styles.heroTags}>
            <span className={styles.heroTagLabel}>Popular:</span>
            <Link href="/jobs?query=React" className={styles.heroTag}>React</Link>
            <Link href="/jobs?query=Python" className={styles.heroTag}>Python</Link>
            <Link href="/jobs?query=Design" className={styles.heroTag}>Design</Link>
            <Link href="/jobs?remote=Remote" className={styles.heroTag}>Remote</Link>
            <Link href="/jobs?query=AI" className={styles.heroTag}>AI/ML</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {statItems.map((stat) => (
              <GlowCard
                key={stat.label}
                borderRadius={20}
                glowRadius={20}
                glowIntensity={0.5}
                edgeSensitivity={50}
                fillOpacity={0.2}
                colors={['#6366f1', '#06b6d4', '#8b5cf6']}
              >
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={`section ${styles.categoriesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Browse by Category</h2>
            <p className={styles.sectionSubtitle}>
              Explore opportunities across various fields and industries
            </p>
          </div>
          <div className={styles.categoriesGrid}>
            {categories.map((cat, index) => (
              <GlowCard
                key={cat.id}
                borderRadius={20}
                glowRadius={18}
                glowIntensity={0.4}
                edgeSensitivity={50}
                fillOpacity={0.15}
                colors={[cat.color || '#6366f1', '#8b5cf6', '#06b6d4']}
              >
                <Link
                  href={`/jobs?category=${cat.id}`}
                  className={styles.categoryCard}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  id={`category-${cat.id}`}
                >
                  <span className={styles.categoryIcon}>{cat.icon}</span>
                  <h3 className={styles.categoryName}>{cat.name}</h3>
                  <span className={styles.categoryCount}>{cat.count} jobs</span>
                  <div className={styles.categoryBar}>
                    <div
                      className={styles.categoryBarFill}
                      style={{ width: `${(cat.count / 1243) * 100}%`, background: cat.color }}
                    />
                  </div>
                </Link>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className={`section ${styles.featuredSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Featured Jobs</h2>
              <p className={styles.sectionSubtitle}>
                Hand-picked opportunities from the world&apos;s best companies
              </p>
            </div>
            <Link href="/jobs" className="btn btn-secondary" id="view-all-jobs">
              View All Jobs →
            </Link>
          </div>
          <div className={styles.jobsGrid}>
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className={`section ${styles.companiesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Top Companies Hiring</h2>
              <p className={styles.sectionSubtitle}>
                Join innovative teams at industry-leading organizations
              </p>
            </div>
            <Link href="/companies" className="btn btn-secondary" id="view-all-companies">
              View All Companies →
            </Link>
          </div>
          <div className={styles.companiesGrid}>
            {companies.slice(0, 6).map((company) => (
              <GlowCard
                key={company.id}
                borderRadius={20}
                glowRadius={22}
                glowIntensity={0.5}
                edgeSensitivity={45}
                fillOpacity={0.2}
                colors={['#6366f1', '#f59e0b', '#06b6d4']}
              >
                <Link
                  href={`/companies/${company.id}`}
                  className={styles.companyCard}
                  id={`company-card-${company.id}`}
                >
                  <span className={styles.companyLogo}><Image src={company.logo} alt={company.name} width={40} height={40} /></span>
                  <h3 className={styles.companyName}>{company.name}</h3>
                  <p className={styles.companyIndustry}>{company.industry}</p>
                  <div className={styles.companyMeta}>
                    <span className={styles.companyRating}>⭐ {company.rating}</span>
                    <span className={styles.companyJobs}>{company.size} employees</span>
                  </div>
                </Link>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlow} />
            <h2 className={styles.ctaTitle}>Ready to Find Your Next Role?</h2>
            <p className={styles.ctaText}>
              Join thousands of professionals who have found their dream jobs through JobSphere.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/jobs" className="btn btn-primary btn-lg" id="cta-browse-jobs">
                Browse All Jobs
              </Link>
              <Link href="/post-job" className="btn btn-outline btn-lg" id="cta-post-job">
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
