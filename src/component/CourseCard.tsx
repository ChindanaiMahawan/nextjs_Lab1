import type { Course } from "@/types/course";

type CourseCardProps = {
    course: Course;
    isFavorite: boolean;
    onToggleFavorite: (id: number) => void;
};

export default function CourseCard({
    course,
    isFavorite,
    onToggleFavorite,
}: CourseCardProps) {
    return (
        <article className="course-card">
            <div className="course-card__topline">
                <span className={`course-status ${course.isOpen ? "course-status--open" : "course-status--closed"}`}>
                    {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
                </span>
                <span className="course-card__credits">{course.credits} หน่วยกิต</span>
            </div>

            <div className="course-card__content">
                <p className="course-card__code">{course.code}</p>
                <h2>{course.title}</h2>
            </div>

            <button
                className={`favorite-button ${isFavorite ? "favorite-button--active" : ""}`}
                type="button"
                aria-pressed={isFavorite}
                onClick={() => onToggleFavorite(course.id)}
            >
                <span aria-hidden="true">{isFavorite ? "❤" : "♡"}</span>
                {isFavorite ? "อยู่ในรายการโปรด" : "เพิ่มเป็นรายการโปรด"}
            </button>
        </article>
    );
} 