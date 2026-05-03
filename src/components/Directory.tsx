'use client';

import { useState } from 'react';
import styles from './Directory.module.css';
import HustleCard from './HustleCard';
import hustlesData from '../../data/hustles.json';

export default function Directory() {
  const [activeCategory, setActiveCategory] = useState('すべて');
  
  const categories = ['すべて', ...Array.from(new Set(hustlesData.map(h => h.category)))];

  const filteredHustles = activeCategory === 'すべて' 
    ? hustlesData 
    : hustlesData.filter(h => h.category === activeCategory);

  return (
    <div className={styles.wrapper}>
      <div className={styles.filterBar}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredHustles.map(hustle => (
          <HustleCard key={hustle.id} hustle={hustle} />
        ))}
      </div>
    </div>
  );
}
