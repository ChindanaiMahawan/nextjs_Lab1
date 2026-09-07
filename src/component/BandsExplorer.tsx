"use client";

import { useState, type ChangeEvent } from "react";
import type { Band } from "@/types/bands";
import BandsCard from "./BandsCard";
type BandsExplorerProps = {
    bands: Band[];
};

export default function BandsExplorer({ bands }: BandsExplorerProps) {
// สร้าง state สำหรับเก็บ keyword ที่ผู้ใช้พิมพ์เข้ามา และ state สำหรับเก็บ id ของวงดนตรีที่ผู้ใช้กด favorite
    const [keyword, setKeyword] = useState("");
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

    function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
        setKeyword(event.target.value);
    }
//กดครั้งแรก → เพิ่ม id เข้า favorite list กดอีกครั้ง เอา id ออกจาก favorite list
    function handleToggleFavorite(band: Band) {
        const id = band.id;
        setFavoriteIds((prevIds) =>
            prevIds.includes(id)
                ? prevIds.filter((favoriteId) => favoriteId !== id)
                : [...prevIds, id]
        );
    }
//โค้ดชุดนี้เป็นส่วนของการค้นหา รายการวงดนตรีตาม keyword ที่ผู้ใช้พิมพ์เข้ามา มาดูทีละบรรทัด
    const searchText = keyword.trim().toLowerCase();
    const visibleBands = bands.filter(
        (band) =>
            band.name_of_bands.toLowerCase().includes(searchText) ||
            band.info.toLowerCase().includes(searchText)
    );

    return (
        <div className="bands-explorer" data-band-count={bands.length}>
            <div className="bands-toolbar">
                <label className="search-box">
                    <span className="search-box__icon" aria-hidden="true">⌕</span>
                    <span className="sr-only">ค้นหาวงดนตรี</span>
                    <input
                        type="search"
                        aria-label="ค้นหาวงดนตรี"
                        value={keyword}
                        onChange={handleKeywordChange} //ทุกครั้งที่ผู้ใช้พิมพ์หรือลบตัวอักษรในช่องนี้ จะเรียกฟังก์ชัน handleKeywordChange ซึ่งจะอัปเดตค่า keyword ใน state ของ component
                        placeholder="ค้นหาชื่อวงดนตรีหรือข้อมูล..."
                    />
                    {keyword && (
                        <button
                            className="search-box__clear"
                            type="button"
                            aria-label="ล้างคำค้นหา"
                            onClick={() => setKeyword("")}
                        >
                            x
                        </button>
                    )}
                </label>
                <p className="bands-result-count">
                    พบ <strong>{visibleBands.length}</strong> จาก {bands.length} วงดนตรี
                </p>
            </div>

            {visibleBands.length === 0 ? (
                <div className="empty-state">
                    <p>ไม่พบวงดนตรีที่ตรงกับคำค้นหา</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleBands.map((band) => (
                        <BandsCard key={band.id} 
                        bands={band}
                        isFavorite={favoriteIds.includes(band.id)}
                        onToggleFavorite={handleToggleFavorite}/>
                    ))}
                </div>
            )}
        </div>
    );
}

