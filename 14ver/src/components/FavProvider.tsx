'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type FavCtx = {
    favs: string[];                 // 포켓몬 id 배열
    toggle: (id: string) => void;
    isFav: (id: string) => boolean;
};

const Ctx = createContext<FavCtx | null>(null);

export function FavProvider({ children }: { children: React.ReactNode }) {
    const [favs, setFavs] = useState<string[]>([]);

    // load
    useEffect(() => {
        const raw = localStorage.getItem('favs');
        if (raw) setFavs(JSON.parse(raw));
    }, []);

    // save
    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favs));
    }, [favs]);

    const toggle = (id: string) =>
        setFavs(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
    const isFav = (id: string) => favs.includes(id);

    return <Ctx.Provider value={{ favs, toggle, isFav }}>{children}</Ctx.Provider>;
}

export const useFav = () => {
    const v = useContext(Ctx);
    if (!v) throw new Error('useFav must be used in FavProvider');
    return v;
};
