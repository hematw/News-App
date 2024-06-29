import { ImCross } from "react-icons/im"
import { Link } from "react-router-dom"


export default function Filter() {
    return (
        <div className="py-4 border-b-2 border-orange-200">
            <Link
                to="?category=business"
                className="px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all  hover:bg-orange-200 "
            >
                Business
            </Link>
            <Link
                to="?category=entertainment"
                className="px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all  hover:bg-orange-200 "
            >
                Entertainment
            </Link>
            <Link
                to="?category=general"
                className="px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all  hover:bg-orange-200 "
            >
                General
            </Link>
            <Link
                to="?category=health"
                className="px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all  hover:bg-orange-200 "
            >
                Health
            </Link>
            <Link
                to="?category=science"
                className="px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all  hover:bg-orange-200 "
            >
                Science
            </Link>
            <Link
                to="?category=sports"
                className="px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all  hover:bg-orange-200 "
            >
                Sports
            </Link>
            <Link
                to="?category=technology"
                className="px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all  hover:bg-orange-200 "
            >
                Technology
            </Link>
            <Link
                to="."
                className="px-4 py-2 m-2 rounded-3xl border-2 text-red-400 border-red-400 transition-all  hover:bg-orange-200 flex items-center gap-1"
            >
                <span className="text-xs"><ImCross /></span>
                Clear All
            </Link>
        </div>
    )
}