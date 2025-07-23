
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function SearchForm() {
    const router = useRouter();
    const params = useSearchParams();
    const [q, setQ] = useState('');

    // URL에 있는 q 반영
    useEffect(() => {
        setQ(params.get('q') ?? '');
    }, [params]);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/pokemon?q=${encodeURIComponent(q)}`);
    };

    return (
        <form onSubmit={onSubmit} className="search-form">
            <input
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="검색"
                className="search-input"
            />
            <button type="submit" className="search-btn">🔍</button>
        </form>
    );
}
