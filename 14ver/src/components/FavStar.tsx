'use client';
import { useFav } from '@/components/FavProvider';

export default function FavStar({ id, size = 18 }: { id: string; size?: number }) {
    const { isFav, toggle } = useFav();
    const active = isFav(id);

    const onClick = (e: React.MouseEvent) => {
        e.preventDefault(); // 링크 클릭 방지
        toggle(id);
    };

    return (
        <button
            onClick={onClick}
            aria-label="찜 토글"
            className={`fav-star ${active ? '' : 'off'}`}
            style={{ fontSize: size }}
        >
            {active ? '★' : '☆'}
        </button>
    );
}
