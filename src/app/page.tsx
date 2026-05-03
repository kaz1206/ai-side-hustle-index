'use client';

import styles from './page.module.css';
import Directory from '@/components/Directory';
import { CheckCircle2, TrendingUp, Zap, Users } from 'lucide-react';

export default function Home() {
  return (
    <main className="container">
      {/* ナビゲーション */}
      <header className={styles.header}>
        <div className={styles.logo}>AI Side-Hustle Index</div>
        <nav className={styles.nav}>
          <a href="#benefits">強み</a>
          <a href="#directory">ディレクトリ</a>
          <a href="#register" className={styles.ctaSmall}>無料登録</a>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.badge}>Exclusive Alpha Access</div>
        <h1 className={styles.title}>
          AIで、<span className={styles.highlightGold}>黄金の資産</span>を設計する。
        </h1>
        <p className={styles.subtitle}>
          1%の成功者だけが知っている、最新のAI副業スキームを完全網羅。
          あなたの時間を「自由」に変える、次世代の収益プラットフォーム。
        </p>
        
        <div className={styles.heroActions}>
          <a href="#register" className="btn-gold">今すぐ先行利益を獲得する</a>
          <p className={styles.heroNote}>※現在、限定100名様のみアクセス開放中</p>
        </div>

        {/* 統計エリア */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>掲載アイデア数</span>
            <span className={styles.statValue}>150+</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statLabel}>月間推定収益</span>
            <span className={styles.statValue}>¥50M+</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statLabel}>成功事例</span>
            <span className={styles.statValue}>89件</span>
          </div>
          <div className={styles.growthGraph}>
            <div className={styles.growthLine} />
          </div>
        </div>
      </section>

      {/* ベネフィットセクション */}
      <section id="benefits" className={styles.benefits}>
        <h2 className={styles.sectionTitle}>なぜ、AI Side-Hustle Indexなのか？</h2>
        <div className={styles.benefitGrid}>
          <div className={styles.benefitCard}>
            <Zap className={styles.benefitIcon} size={32} />
            <h3>爆速の収益化</h3>
            <p>検証済みのAIプロンプトとワークフローにより、初日から収益を狙える仕組みを提供します。</p>
          </div>
          <div className={styles.benefitCard}>
            <TrendingUp className={styles.benefitIcon} size={32} />
            <h3>不労所得への昇華</h3>
            <p>一度構築すればAIが自動で働く「資産型」の副業だけを厳選して掲載しています。</p>
          </div>
          <div className={styles.benefitCard}>
            <Users className={styles.benefitIcon} size={32} />
            <h3>先行者利益の独占</h3>
            <p>市場が飽和する前の「今、稼げる」ニッチなジャンルをAIがリアルタイムで特定します。</p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section id="directory" className={styles.directorySection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>AI副業チャンス一覧</h2>
          <p>AI鑑定を通過した、高収益案件のみを表示しています</p>
        </div>
        <Directory />
      </section>

      {/* ユーザーの声セクション */}
      <section id="testimonials" className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>成功者からの報告</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.userQuote}>「AIに任せるという発想が、私の人生を180度変えました。今では本業以上の収益が自動で入ります。」</div>
            <div className={styles.userProfile}>
              <div className={styles.userAvatar}>S</div>
              <div className={styles.userInfo}>
                <h4>佐藤 健太</h4>
                <p>IT企業勤務 / 32歳</p>
                <div className={styles.profitBadge}>月収 +45万円達成</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.userQuote}>「看護師をしながらでも無理なく続けられました。専門知識がなくても、AIが相棒ならここまで稼げるんですね。」</div>
            <div className={styles.userProfile}>
              <div className={styles.userAvatar}>M</div>
              <div className={styles.userInfo}>
                <h4>村田 美咲</h4>
                <p>看護師 / 28歳</p>
                <div className={styles.profitBadge}>月収 +20万円達成</div>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.userQuote}>「半信半疑でしたが、最初の1週間で初収益。このインデックスには、本物のチャンスしか載っていません。」</div>
            <div className={styles.userProfile}>
              <div className={styles.userAvatar}>T</div>
              <div className={styles.userInfo}>
                <h4>田中 雄一</h4>
                <p>フリーランス / 41歳</p>
                <div className={styles.profitBadge}>累計収益 300万円突破</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 登録セクション (CTA) */}
      <section id="register" className={styles.registerSection}>
        <div className={styles.registerCard}>
          <h2>人生を加速させる準備はいいですか？</h2>
          <p>メールアドレスを登録して、非公開のAI副業レポートを受け取ってください。</p>
          <form className={styles.registerForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="メールアドレスを入力" className={styles.input} />
            <button type="submit" className="btn-gold">無料で参加する</button>
          </form>
          <div className={styles.trustInfo}>
            <CheckCircle2 size={16} color="#fbbf24" />
            <span>いつでも解除可能です。プライバシーは完全に保護されます。</span>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2026 AI Side-Hustle Index. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
