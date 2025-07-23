import Link from 'next/link';
import './globals.css';
import { FavProvider } from '@/components/FavProvider';
import SearchForm from '@/components/SearchForm';

export const metadata = { title: '포켓몬 도감', description: 'Next.js 14 포켓몬 도감' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <FavProvider>
          <div className="top-red" />
          <div className="top-black">포켓몬 도감</div>

          <nav className="nav-bar">
            <Link href="/" className="nav-link">메인</Link>
            <Link href="/favs" className="nav-link">찜 목록</Link>
            <SearchForm />
          </nav>
          <hr className="nav-sep" />

          {children}
        </FavProvider>
      </body>
    </html>
  );
}
