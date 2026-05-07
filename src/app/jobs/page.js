import { searchJobs, categories } from '@/lib/data';
import JobCard from '@/components/JobCard';
import JobFilters from '@/components/JobFilters';
import Pagination from '@/components/Pagination';
import styles from './page.module.css';

export const metadata = {
  title: 'Find Jobs',
  description: 'Browse and search through hundreds of job opportunities from top companies. Filter by category, location, salary, and more.',
};

const JOBS_PER_PAGE = 6;

export default async function JobsPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.query || '';
  const category = params?.category || '';
  const type = params?.type || '';
  const level = params?.level || '';
  const remote = params?.remote || '';
  const location = params?.location || '';
  const minSalary = params?.minSalary || '';
  const passoutYear = params?.passoutYear || '';
  const sortBy = params?.sortBy || 'newest';
  const currentPage = parseInt(params?.page || '1', 10);

  const filteredJobs = searchJobs({ query, category, type, level, remote, location, sortBy, minSalary, passoutYear });
  const activeCategory = categories.find(c => c.id === category);

  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + JOBS_PER_PAGE);

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>
            {activeCategory ? `${activeCategory.icon} ${activeCategory.name} Jobs` : 'Find Your Perfect Job'}
          </h1>
          <p className={styles.subtitle}>
            {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
            {query && <> matching &quot;<strong>{query}</strong>&quot;</>}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.layout}>
            {/* Sidebar Filters */}
            <aside className={styles.sidebar}>
              <JobFilters
                currentFilters={{ query, category, type, level, remote, location, sortBy, minSalary, passoutYear }}
              />
            </aside>

            {/* Job Listings */}
            <div className={styles.listings}>
              {/* Sort Bar */}
              <div className={styles.sortBar}>
                <span className={styles.resultCount}>
                  Showing <strong>{startIndex + 1}–{Math.min(startIndex + JOBS_PER_PAGE, filteredJobs.length)}</strong> of <strong>{filteredJobs.length}</strong> jobs
                </span>
              </div>

              {paginatedJobs.length > 0 ? (
                <div className={styles.jobsList}>
                  {paginatedJobs.map((job) => (
                    <JobCard key={job.id} job={job} featured={job.featured} />
                  ))}
                </div>
              ) : (
                <div className={styles.empty}>
                  <span className={styles.emptyIcon}>🔍</span>
                  <h3>No jobs found</h3>
                  <p>Try adjusting your search criteria or clearing filters.</p>
                </div>
              )}

              <Pagination
                totalItems={filteredJobs.length}
                itemsPerPage={JOBS_PER_PAGE}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

