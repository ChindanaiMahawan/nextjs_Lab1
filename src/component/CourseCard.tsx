import {Course} from "@/types/course"
type CourseCardProps = {
    course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
    return (
        <div>
            <article className="courseCard">
                <h2>{course.title}</h2>
                <p>รหัสวิชา: {course.code}</p>
                <p>{course.credits} หน่วยกิต</p>
                <p className="text-red-600">{course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}</p>
            </article>
        </div>
    );
}