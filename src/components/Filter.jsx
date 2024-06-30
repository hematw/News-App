import { RxCross2 } from "react-icons/rx";
import { useSearchParams } from "react-router-dom";


export default function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    const categoryFilter = searchParams.get('category')

    return (
        <div className="py-4 border-b-2 border-orange-200">
            <button
                onClick={() => handleFilterChange('category', 'business')}
                className={`px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all
                     hover:bg-orange-200 ${categoryFilter === "business" ? "bg-slate-600 text-white" : ""}`}
            >
                Business
            </button>
            <button
                onClick={() => handleFilterChange('category', 'entertainment')}
                className={`px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all
                     hover:bg-orange-200 ${categoryFilter === "entertainment" ? "bg-slate-600 text-white" : ""}`}
            >
                Entertainment
            </button>
            <button
                onClick={() => handleFilterChange('category', 'general')}
                className={`px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all
                     hover:bg-orange-200 ${categoryFilter === "general" ? "bg-slate-600 text-white" : ""}`}
            >
                General
            </button>
            <button
                onClick={() => handleFilterChange('category', 'health')}
                className={`px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all
                     hover:bg-orange-200 ${categoryFilter === "health" ? "bg-slate-600 text-white" : ""}`}
            >
                Health
            </button>
            <button
                onClick={() => handleFilterChange('category', 'science')}
                className={`px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all
                     hover:bg-orange-200 ${categoryFilter === "science" ? "bg-slate-600 text-white" : ""}`}
            >
                Science
            </button>
            <button
                onClick={() => handleFilterChange('category', 'sports')}
                className={`px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all
                     hover:bg-orange-200 ${categoryFilter === "sports" ? "bg-slate-600 text-white" : ""}`}
            >
                Sports
            </button>
            <button
                onClick={() => handleFilterChange('category', 'technology')}
                className={`px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all
                     hover:bg-orange-200 ${categoryFilter === "technology" ? "bg-slate-600 text-white" : ""}`}
            >
                Technology
            </button>
            <button
                onClick={() => handleFilterChange('category', null)}
                className={`px-4 py-2 m-2 rounded-3xl border-2 text-red-400 border-red-400
                     transition-all  hover:bg-orange-200 inline-flex items-center gap-1`}
            >
                <span className="text-xs"><RxCross2 /></span>
                Clear filter
            </button>
        </div>
    )
}