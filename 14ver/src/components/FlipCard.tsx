
'use client';
import { useState } from 'react';
import FavStar from './FavStar';

type Props = { name: string; desc: string; frontImg: string; backImg: string };

export default function FlipCard({ name, desc, frontImg, backImg }: Props) {
    const [isBack, setIsBack] = useState(false);

    return (
        <div className="detail-card">
            <h1 className="detail-name">{name}
                <FavStar id={frontImg.match(/\/(\d+)\.png$/)?.[1] ?? ''} size={26} />
            </h1>

            {/* 이미지(앞/뒤)만 뒤집기 */}
            <div className="flip-wrap">
                <div className={`flip-inner ${isBack ? 'is-back' : ''}`}>
                    <div className="flip-face flip-front">
                        <img src={frontImg} alt={`${name} 앞모습`} />
                    </div>
                    <div className="flip-face flip-back">
                        <img src={backImg || frontImg} alt={`${name} 뒷모습`} />
                    </div>
                </div>
            </div>

            {/* 항상 노출되는 상세 설명 */}
            {desc && <p className="detail-desc">{desc}</p>}

            <button className="btn-flip" onClick={() => setIsBack(v => !v)}>
                {isBack ? '앞모습 보기' : '뒤집기'}
            </button>
        </div>
    );
}
