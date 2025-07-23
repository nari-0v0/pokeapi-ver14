'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import FavStar from '@/components/FavStar';

type Item = { id: string; name: string };

export default function SearchGrid({ list, q }: { list: Item[]; q: string }) {
    const filtered = useMemo(() => {
        const s = q.trim().toLowerCase();
        return s ? list.filter(p => p.name.toLowerCase().includes(s)) : list;
    }, [q, list]);

    return (
        <ul className="grid">
            {filtered.map(p => (
                <li key={p.id}>
                    {/* 카드 래퍼는 div */}
                    <div className="card">
                        {/* 이미지만 링크로 감싸기 */}
                        <Link href={`/pokemon/${p.id}`} className="card-link">
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                                alt={p.name}
                            />
                        </Link>

                        {/* 이름 + 별 (링크 밖!) */}
                        <div className="card-name">
                            {p.name}
                            <FavStar id={String(p.id)} size={18} />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
