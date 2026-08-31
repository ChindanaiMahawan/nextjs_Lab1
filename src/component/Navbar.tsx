import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex gap-4">
                <li>
                    <Link href="/">HomePage</Link>
                </li>
                <li>
                    <Link href="/courses">Courses</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}