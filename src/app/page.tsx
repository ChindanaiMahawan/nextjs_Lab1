import Image from "next/image";
import Link from "./courses/page";
const siteName: string = "CSMJU Website"
const courseCount: number = 67
const description: string = "เว็บสำหรับเทสคำสั่ง"
const isOpen: boolean = true
const topics: string[] = [
  "HTML",
  "CSS",
  "TypeScript",
  "Next.js",
];
type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
};
const course: Course = {
  id: 1,
  code: "10301231",
  title: "Web Technology",
  credits: 3,
  isOpen: true,
};

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center mt-2 gap-2">
        <h1 className="text-amber-100 font-extraboldbold text-3xl">{siteName}</h1>
        <p className="text-amber-200">{description}</p>
        <h2 className="text-amber-300 font-bold">{courseCount}</h2>
        <p>สถานนะ:{isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}</p>
        <ul>
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}
