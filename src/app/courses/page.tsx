import React from 'react'
import Link from "next/link";

type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
};

const courses: Course[] = [
  {
    id: 1,
    code: "10301231",
    title: "Web Technology",
    credits: 3,
    isOpen: true,
  },
  {
    id: 2,
    code: "10301232",
    title: "Database Systems",
    credits: 3,
    isOpen: false,
  },
  {
    id: 3,
    code: "10301233",
    title: "Databaseอะไรไม่รู้",
    credits: 3,
    isOpen: false,
  },
];

export default function Courses() {
  return (
    <div>
      <section className="courseGrid m-4">
        {courses.map((course, index) => (
          <article key={course.id} className="courseCard">
            <h2>{index + 1}.{course.title}</h2>
            <p>รหัสวิชา: {course.code}</p>
            <p>{course.credits} หน่วยกิต</p>
            <p>
              {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
            </p>
          </article>
        ))}
      </section>
    </div>
  )
}
