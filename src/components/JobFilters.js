'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { categories, indianCities, indianStates } from '@/lib/data';
import styles from './JobFilters.module.css';

export default function JobFilters({ currentFilters }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/jobs?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push('/jobs');
  };

  const hasActiveFilters = Object.values(currentFilters).some(v => v && v !== 'newest');

  return (
    <div className={styles.filters}>
      <div className={styles.filtersHeader}>
        <h3 className={styles.filtersTitle}>Filters</h3>
        {hasActiveFilters && (
          <button onClick={clearFilters} className={styles.clearBtn} id="clear-filters-btn">
            Clear all
          </button>
        )}
      </div>

      {/* Search */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Search</label>
        <input
          type="text"
          placeholder="Keywords..."
          className="input"
          defaultValue={currentFilters.query}
          onChange={(e) => {
            clearTimeout(window._searchTimeout);
            window._searchTimeout = setTimeout(() => updateFilter('query', e.target.value), 400);
          }}
          id="filter-search-input"
        />
      </div>

      {/* Category */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Category</label>
        <div className={styles.filterOptions}>
          <button
            onClick={() => updateFilter('category', '')}
            className={`${styles.filterOption} ${!currentFilters.category ? styles.active : ''}`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.id)}
              className={`${styles.filterOption} ${currentFilters.category === cat.id ? styles.active : ''}`}
              id={`filter-category-${cat.id}`}
            >
              <span>{cat.icon}</span> {cat.name}
              <span className={styles.filterCount}>{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Job Type */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Job Type</label>
        <div className={styles.filterOptions}>
          {['', 'Full-time', 'Part-time', 'Contract'].map((type) => (
            <button
              key={type}
              onClick={() => updateFilter('type', type)}
              className={`${styles.filterOption} ${currentFilters.type === type ? styles.active : ''}`}
              id={`filter-type-${type || 'all'}`}
            >
              {type || 'All Types'}
            </button>
          ))}
        </div>
      </div>

      {/* Experience Level */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Experience Level</label>
        <div className={styles.filterOptions}>
          {['', 'Junior', 'Mid', 'Senior', 'Lead'].map((level) => (
            <button
              key={level}
              onClick={() => updateFilter('level', level)}
              className={`${styles.filterOption} ${currentFilters.level === level ? styles.active : ''}`}
              id={`filter-level-${level || 'all'}`}
            >
              {level || 'All Levels'}
            </button>
          ))}
        </div>
      </div>

      {/* Remote */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Work Mode</label>
        <div className={styles.filterOptions}>
          {['', 'Remote', 'Hybrid', 'On-site'].map((mode) => (
            <button
              key={mode}
              onClick={() => updateFilter('remote', mode)}
              className={`${styles.filterOption} ${currentFilters.remote === mode ? styles.active : ''}`}
              id={`filter-remote-${mode || 'all'}`}
            >
              {mode || 'All Modes'}
            </button>
          ))}
        </div>
      </div>

      {/* Location (City/State) */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Location</label>
        <div className={styles.filterOptions}>
          <button
            onClick={() => updateFilter('location', '')}
            className={`${styles.filterOption} ${!currentFilters.location ? styles.active : ''}`}
          >
            All India
          </button>
          {indianStates.slice(0, 8).map((state) => (
            <button
              key={state}
              onClick={() => updateFilter('location', state)}
              className={`${styles.filterOption} ${currentFilters.location === state ? styles.active : ''}`}
              id={`filter-state-${state.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {state}
            </button>
          ))}
        </div>
      </div>

      {/* Salary Range */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Minimum Salary</label>
        <div className={styles.sliderWrapper}>
          <input
            type="range"
            min="500000"
            max="6000000"
            step="500000"
            className={styles.slider}
            value={currentFilters.minSalary || 500000}
            onChange={(e) => updateFilter('minSalary', e.target.value)}
            id="filter-salary-slider"
          />
          <div className={styles.sliderValue}>
            ₹{(parseInt(currentFilters.minSalary || 500000) / 100000).toFixed(1)}L+
          </div>
        </div>
      </div>

      {/* Sort */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Sort By</label>
        <select
          className="input"
          value={currentFilters.sortBy}
          onChange={(e) => updateFilter('sortBy', e.target.value)}
          id="filter-sort-select"
        >
          <option value="newest">Newest First</option>
          <option value="salary-high">Highest Salary</option>
          <option value="salary-low">Lowest Salary</option>
          <option value="applicants">Fewest Applicants</option>
        </select>
      </div>
    </div>
  );
}
