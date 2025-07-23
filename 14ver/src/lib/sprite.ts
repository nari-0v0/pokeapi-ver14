// PokeAPI raw sprite repo base
const BASE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

export function frontSprite(id: string | number) {
    // 픽셀 앞모습統一
    return `${BASE}/${id}.png`;
}

export function backSprite(id: string | number) {
    // 픽셀 뒷모습統一 (없으면 앞모습 대체)
    return `${BASE}/back/${id}.png`;
}
