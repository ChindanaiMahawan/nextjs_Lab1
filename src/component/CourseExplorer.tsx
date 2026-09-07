"use client";
import { useState, type ChangeEvent } from "react";
import type { Course } from "@/types/course";
import CourseCard from "./CourseCard";
type CourseExplorerProps = {
    courses: Course[];
};

export default function CourseExplorer({ courses }: CourseExplorerProps) {
    const [keyword, setKeyword] = useState("");
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
    function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
        setKeyword(event.target.value);
    }

    function handleToggleFavorite(id: number) {
        setFavoriteIds((prevIds) =>
            prevIds.includes(id)
                ? prevIds.filter((favoriteId) => favoriteId !== id)
                : [...prevIds, id]
        );
    }

    const searchText = keyword.trim().toLowerCase();
    const visibleCourses = courses.filter(
        (course) =>
            course.title.toLowerCase().includes(searchText) ||
            course.code.toLowerCase().includes(searchText)
    );

    return (
        <div className="course-explorer" data-course-count={courses.length}>
            <div className="course-toolbar">
                <label className="search-box">
                    <span className="search-box__icon" aria-hidden="true">⌕</span>
                    <span className="sr-only">ค้นหารายวิชา</span>
                    <input
                        type="search"
                        aria-label="ค้นหารายวิชา"
                        value={keyword}
                        onChange={handleKeywordChange}
                        placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา..."
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
                <p className="course-result-count">
                    พบ <strong>{visibleCourses.length}</strong> จาก {courses.length} รายวิชา
                </p>
            </div>

            {visibleCourses.length === 0 ? (
                <div className="empty-state">
                    <span className="empty-state__icon" aria-hidden="true">⌕</span>
                    <h2>ไม่พบรายวิชา</h2>
                    <p>ลองค้นหาด้วยชื่อวิชา หรือรหัสวิชาอื่น</p>
                    <button className="secondary-button" type="button" onClick={() => setKeyword("")}>
                        ดูรายวิชาทั้งหมด
                    </button>
                </div>
            ) : (
                <section className="course-grid" aria-label="รายการรายวิชา">
                    {visibleCourses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            isFavorite={favoriteIds.includes(course.id)}
                            onToggleFavorite={handleToggleFavorite}
                        />
                    ))}
                </section>
            )}
        </div>
    );
}