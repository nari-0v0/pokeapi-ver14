'use client';

import Link from 'next/link';
import { useFav } from './FavProvider';

type Item = { id: string; name: string };

export default function FavClient({ list }: { list: Item[] }) {
    const { favs, toggle } = useFav();
    const onlyFavs = list.filter(p => favs.includes(p.id));

    if (!onlyFavs.length) return <p style={{ textAlign: 'center' }}>찜한 포켓몬이 없습니다.</p>;

    return (
        <ul className="grid">
            {onlyFavs.map(p => (
                <li key={p.id}>
                    <div className="card">
                        <Link href={`/pokemon/${p.id}`}>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                                alt={p.name}
                            />
                            <div className="card-name">{p.name}</div>
                        </Link>
                        <button
                            onClick={() => toggle(p.id)}
                            className="mt-2 px-3 py-1 bg-rose-500 text-white rounded shadow hover:brightness-110 text-sm"
                            style={{ boxShadow: '0 2px 0 #000' }}
                        >
                            ★ 해제
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
