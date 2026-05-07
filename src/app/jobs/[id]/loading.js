import styles from '../../loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
      <span className={styles.text}>Loading job details...</span>
    </div>
  );
}
