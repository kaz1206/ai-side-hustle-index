import styles from './HustleCard.module.css';
import { TrendingUp, ShieldCheck, Star, ArrowUpRight } from 'lucide-react';

interface Hustle {
  id: string;
  title: string;
  category: string;
  description: string;
  difficulty: string;
  profit: string;
  tags: string[];
  isPremium: boolean;
}

export default function HustleCard({ hustle }: { hustle: Hustle }) {
  // ダミーの成長グラフデータ
  const sparkData = [20, 40, 35, 60, 55, 80, 95];

  return (
    <div className={`${styles.card} ${hustle.isPremium ? styles.premium : ''}`}>
      <div className={styles.header}>
        <div className={styles.categoryGroup}>
          <span className={styles.category}>{hustle.category}</span>
          <span className={styles.verified}>
            <ShieldCheck size={12} />
            AI鑑定済
          </span>
        </div>
        {hustle.isPremium && (
          <div className={styles.premiumBadge}>
            < Star size={10} fill="currentColor" />
            FEATURED
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>
          {hustle.title}
          <ArrowUpRight className={styles.externalIcon} size={16} />
        </h3>
        <p className={styles.description}>{hustle.description}</p>
      </div>
      
      <div className={styles.businessMetrics}>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>難易度</span>
          <span className={styles.metricValue}>{hustle.difficulty}</span>
        </div>
        <div className={`${styles.metric} ${styles.profitMetric}`}>
          <span className={styles.metricLabel}>推定月収</span>
          <div className={styles.profitValueWrapper}>
            <TrendingUp size={14} className={styles.trendIcon} />
            <span className={styles.metricValue}>{hustle.profit}</span>
          </div>
          {/* ミニグラフ */}
          <div className={styles.sparkline}>
            {sparkData.map((val, i) => (
              <div 
                key={i} 
                className={styles.sparkBar} 
                style={{ height: `${val}%` }} 
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.tags}>
          {hustle.tags.slice(0, 2).map(tag => (
            <span key={tag} className={styles.tag}>#{tag}</span>
          ))}
        </div>
        <button className={styles.actionBtn}>
          詳細を見る
        </button>
      </div>
    </div>
  );
}
