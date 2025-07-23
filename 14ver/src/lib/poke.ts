const BASE = 'https://pokeapi.co/api/v2';

function getId(url: string) {
    const m = url.match(/\/pokemon\/(\d+)\//);
    return m ? m[1] : '';
}

export async function getPokemonList(limit = 151) {
    const res = await fetch(`${BASE}/pokemon?limit=${limit}`, { next: { revalidate: 3600 } });
    const data = await res.json();

    return Promise.all(
        data.results.map(async (r: any) => {
            const id = getId(r.url);
            const speciesRes = await fetch(`${BASE}/pokemon-species/${id}`, { next: { revalidate: 86400 } });
            const species = await speciesRes.json();
            const koName = species.names.find((n: any) => n.language.name === 'ko')?.name ?? r.name;
            return { id, name: koName };
        })
    );
}

export async function getPokemon(id: string) {
    const res = await fetch(`${BASE}/pokemon/${id}`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = await res.json();

    const speciesRes = await fetch(`${BASE}/pokemon-species/${id}`, { next: { revalidate: 86400 } });
    const species = await speciesRes.json();

    const koName =
        species.names.find((n: any) => n.language.name === 'ko')?.name ?? data.name;

    const koFlavor =
        species.flavor_text_entries
            .filter((f: any) => f.language.name === 'ko')
            .map((f: any) => f.flavor_text.replace(/\f|\n/g, ' '))
            .at(0) ?? '';

    return { ...data, koName, koFlavor };
}
