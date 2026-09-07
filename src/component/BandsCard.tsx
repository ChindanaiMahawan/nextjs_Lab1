"use client";
import { useState } from "react";
import Image from "next/image";
import { Band } from "@/types/bands";
import ButtonComponent from "./ฺButtonComponent";


type BandsProps = {
    bands: Band;
    description?: string;
    isFavorite?: boolean;
    onToggleFavorite?: (band: Band) => void;
};

export default function BandsCard({ bands, description, isFavorite = false, onToggleFavorite, }: BandsProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLike() {
        setLikeCount((prev) => prev + 1);
    }

    return (
        <article className="group relative w-full max-w-sm border-2 border-black bg-white">
            {/* เอาlogoวงมาแสดง */}
            <div className="flex flex-col text-center items-center gap-4 p-4 wrap-normal">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden border-2 border-black">
                    <Image
                        src={bands.image || ""}
                        alt={bands.name_of_bands}
                        fill
                        className="object-cover"
                    />
                </div>
                {/* // เอาชื่อวงออกมาแสดง  */}
                <div className="min-w-0">
                    <h2 className="text-2xl font-bold leading-tight text-red-600">
                        {bands.name_of_bands}
                    </h2>
                </div>
            </div>
            {/* //วนในmemberimageเพื่อเอารูปออกมาตามลำดับ กับชื่อ */}
            {bands.memberimage && bands.memberimage.length > 0 && (
                <div className="border-t-2 border-dashed border-black px-4 py-3">
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                        {bands.memberimage.map((m, i) => (
                            <div key={`${m.name}-${i}`} className="flex flex-col items-center gap-1">
                                <div className="relative h-16 w-16 overflow-hidden border-2 border-black">
                                    <Image
                                        src={m.image || ""}
                                        alt={m.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="text-center text-xs leading-tight text-black">
                                    {m.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* เอาข้อความใน music_advic มาต่อกันโดยใช้เครื่องหมาย - คั่น */}
            <div className="border-t-2 border-dashed border-black px-4 py-3">
                <p className="text-sm font-semibold text-red-950">
                    เพลงแนะนำ: {bands.music_advic.join(" - ")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-black">
                    {bands.info}
                </p>

                {description && (
                    <p className="mt-2 text-sm italic text-black">{description}</p>
                )}

            </div>
            {/* กดlike เพิ่มจำนวน like และแสดงจำนวน like ปัจจุบัน */}
            <div className="border-t-2 border-dashed border-black px-4 py-3">
                <ButtonComponent count={likeCount} onClick={handleLike} />
            </div>
            {/* // ปุ่มสำหรับเพิ่มหรือลบวงดนตรีออกจากรายการโปรด โดยใช้ isFavorite เพื่อกำหนดสถานะของปุ่ม และ onToggleFavorite เพื่อเรียกฟังก์ชันเมื่อผู้ใช้คลิกปุ่ม */}
            <button className={`favorite-button ${isFavorite ? "favorite-button--active" : ""}`}
                type="button"
                aria-pressed={isFavorite}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                onClick={() => onToggleFavorite?.(bands)}
            >
                <span aria-hidden="true">{isFavorite ? "❤" : "♡"}</span>
                {isFavorite ? "อยู่ในรายการโปรด" : "เพิ่มเป็นรายการโปรด"}

            </button>

        </article>
    );
}