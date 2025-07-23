// src/app/not-found.tsx
export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '40px' }}>
            <h2>페이지를 찾을 수 없어요 😢</h2>
            <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>홈으로</a>
        </div>
    );
}
