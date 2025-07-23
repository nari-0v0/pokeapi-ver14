// src/app/pokemon/error.tsx
'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>에러 발생: {error.message}</p>
            <button onClick={reset}>다시 시도</button>
        </div>
    );
}
