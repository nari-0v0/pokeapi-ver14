import { getPokemonList } from '@/lib/poke';
import SearchGrid from '@/components/SearchGrid';

export default async function PokemonListPage({
    searchParams,
}: {
    searchParams: { q?: string };
}) {
    const list = await getPokemonList(151);
    return (
        <main className="container">
            <p className="main-title">메인</p>
            <SearchGrid list={list} q={searchParams.q ?? ''} />
        </main>
    );
}