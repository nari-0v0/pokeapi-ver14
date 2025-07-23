import './globals.css';

export const metadata = { title: '포켓몬 도감', description: 'Next.js 14 포켓몬 도감' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="top-red" />
        <div className="top-black">포켓몬 도감</div>
        {children}
      </body>
    </html>
  );
}
