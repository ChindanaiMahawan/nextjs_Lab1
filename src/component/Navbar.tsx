import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-5xl mx-auto px-4">
                <ul className="flex items-center gap-8 h-16">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                        >
                            หน้าแรก
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/courses"
                            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                        >
                            รายวิชา
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                        >
                            เกี่ยวกับ
                        </Link>
                    </li>
                    <li>
                        <Link   
                            href="/bands" 
                            className="text-gray-700 font-medium hover:text-blue-600 transition-color "
                        >
                            วงดนตรี
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}