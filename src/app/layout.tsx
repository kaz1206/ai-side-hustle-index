import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Side-Hustle Index | 高収益AI副業ディレクトリ',
  description: 'AIを活用した次世代の副業アイデアとツールを網羅。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="bg-wrapper">
          <div className="bg-aura-1" />
          <div className="bg-aura-2" />
          <div className="bg-aura-3" />
        </div>
        {children}
      </body>
    </html>
  );
}
