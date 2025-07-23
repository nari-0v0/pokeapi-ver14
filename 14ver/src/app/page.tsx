import Link from 'next/link';
import { getPokemonList } from '@/lib/poke';
import { frontSprite } from '@/lib/sprite';

export default async function PokemonListPage() {
  const list = await getPokemonList(151);

  return (
    <main className="container">
      <ul className="grid">
        {list.map((p) => (
          <li key={p.id}>
            <Link href={`/pokemon/${p.id}`} className="card">
              <img src={frontSprite(p.id)} alt={p.name} />
              <div className="card-name">{p.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
