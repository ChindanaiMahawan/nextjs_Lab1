import { courses } from "@/data/coursedata"
import CourseExplorer from '@/component/CourseExplorer';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "รายวิชาทั้งหมด",
};

export default function CoursesPage() {
  return (
    <main className="courses-page">
      <div className="page-intro">
        <p className="eyebrow">CSMJU COURSE HUB</p>
        <h1>ค้นหารายวิชาที่ใช่<br /><em>สำหรับคุณ</em></h1>
        <p className="page-intro__description">สำรวจรายวิชาทั้งหมดและบันทึกวิชาที่คุณสนใจไว้ในรายการโปรด</p>
      </div>
      <CourseExplorer courses={courses} />
    </main>
  );
}