'use client';

import { useState, useMemo } from 'react';

type Poke = { id: string; name: string };

export default function SearchClient({ list }: { list: Poke[] }) {
    const [q, setQ] = useState('');

    const filtered = useMemo(
        () => list.filter((p) => p.name.includes(q)),
        [q, list]
    );

    return (
        <>
            <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="포켓몬 이름 검색"
                className="w-full mb-6 p-2 border rounded"
            />

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filtered.map((p) => (
                    <li key={p.id} className="group">
                        <a
                            href={`/pokemon/${p.id}`}
                            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center"
                        >
                            <div className="text-xl font-medium mb-2 group-hover:text-rose-500 transition">
                                {p.name}
                            </div>
                            <div className="text-sm text-slate-400">No.{p.id}</div>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}
