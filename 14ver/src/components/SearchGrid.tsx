'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type Poke = { id: string; name: string };

export default function SearchGrid({ list }: { list: Poke[] }) {
    const [q, setQ] = useState('');

    const filtered = useMemo(
        () =>
            list.filter((p) =>
                p.name.toLowerCase().includes(q.trim().toLowerCase())
            ),
        [q, list]
    );

    return (
        <>
            <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="포켓몬 이름 검색 (한글)"
                className="w-full mb-6 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
            />

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filtered.map((p) => (
                    <li key={p.id}>
                        <Link
                            href={`/pokemon/${p.id}`}
                            className="group block rounded-2xl bg-white shadow hover:shadow-lg transition overflow-hidden"
                        >
                            <div className="p-4 text-center">
                                <div className="text-sm text-slate-400 mb-1">No.{p.id}</div>
                                <div className="text-lg font-semibold group-hover:text-rose-500 transition">
                                    {p.name}
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
