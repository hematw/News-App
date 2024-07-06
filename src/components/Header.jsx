import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import { useNavigate, Link } from "react-router-dom"

export default function Header({ setSearchWord }) {
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    function handleClick() {
        setSearchWord(inputValue)
        navigate('search?q=' + inputValue)
    }

    return (
        <header className="px-10 py-4 flex items-center justify-between bg-slate-700 text-gray-200">
            <div className="flex items-center gap-10">
                <Link to='/' >
                    <img src="/logo.png" alt="Brand logo" className="w-14 invert" />
                </Link>
                <Link
                    to='/'
                    className="hidden sm:block"
                >
                    Home
                </Link>
            </div>

            <div className="flex items-center bg-slate-100 text-slate-700 h-10 rounded-md">
                <input
                    type="text"
                    className="mr-4 bg-transparent focus:outline-none indent-2"
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search..."
                />
                <button
                    className="w-10 h-full bg-orange-200 rounded-r-md flex justify-center items-center"
                    onClick={handleClick}
                >
                    <FiSearch />
                </button>
            </div>
        </header>
    )
}