import { getPokemonList } from '@/lib/poke';
import FavClient from '@/components/FavClient';

export default async function FavsPage() {
    const list = await getPokemonList(151);
    return (
        <main className="container">
            <p className="main-title">찜한 포켓몬</p>
            <FavClient list={list} />
        </main>
    );
}
