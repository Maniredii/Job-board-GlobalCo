import styles from './loading.module.css';

export default function JobsLoading() {
  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <div className="container">
          <div className={styles.shimmer} style={{ width: '300px', height: '2.5rem', margin: '0 auto' }} />
          <div className={styles.shimmer} style={{ width: '180px', height: '1rem', margin: '0.75rem auto 0' }} />
        </div>
      </section>
      <section style={{ padding: '1rem 0' }}>
        <div className="container">
          <div className={styles.layout}>
            <aside className={styles.filterSkeleton}>
              {[...Array(5)].map((_, i) => (
                <div key={i} className={styles.shimmer} style={{ width: '100%', height: '2rem' }} />
              ))}
            </aside>
            <div className={styles.listings}>
              {[...Array(4)].map((_, i) => (
                <div key={i} className={styles.cardSkeleton}>
                  <div className={styles.shimmer} style={{ width: '60%', height: '1.25rem' }} />
                  <div className={styles.shimmer} style={{ width: '40%', height: '1rem' }} />
                  <div className={styles.shimmer} style={{ width: '100%', height: '3rem' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
