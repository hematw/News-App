import { FiSearch } from "react-icons/fi"
import { NavLink } from "react-router-dom"


export default function  Header(){
    return (
        <header className="px-10 py-4 flex items-center justify-between bg-slate-700 text-gray-200">
            <img src="/logo.png" alt="Brand logo" className="w-14" />
            
            <nav >
                <ul className="flex gap-10">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="top-headlines">Top Headlines</NavLink></li>
                </ul>
            </nav>

            <div className="flex items-center bg-orange-300 ">
                <input type="text" className="mr-4" />
                <button><FiSearch /></button>
            </div>
        </header>
    )
}