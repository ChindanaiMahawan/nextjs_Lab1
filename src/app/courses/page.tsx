import React from 'react'
import CourseCard from '../../component/CourseCard';
import Link from "next/link";
import { Course } from "../../types/course";
import { courses } from "@/data/coursedata"

export default function Courses() {
  return (
    <>
      <div>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </>
  );
}