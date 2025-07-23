import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPokemon } from '@/lib/poke';
import { frontSprite, backSprite } from '@/lib/sprite';
import FlipCard from '@/components/FlipCard';

export default async function PokemonDetailPage({ params }: { params: { id: string } }) {
    const p = await getPokemon(params.id);
    if (!p) notFound();

    const koFlavor =
        p.flavor_text_entries?.find((f: any) => f.language.name === 'ko')?.flavor_text
            ?.replace(/\f/g, ' ')
            ?.replace(/\n/g, ' ') ?? '';

    return (
        <main className="container">
            <FlipCard
                name={p.koName}
                desc={p.koFlavor}
                frontImg={frontSprite(p.id)}
                backImg={backSprite(p.id)}
            />
        </main>
    );
}
