import { RxCross2 } from "react-icons/rx";
import { useSearchParams } from "react-router-dom";


export default function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();

    const allCategories = ["business", "entertainment", "general", "health", "science", "sports", "technology", null]

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
        <div className="py-4 border-b-2 border-orange-200 text-nowrap overflow-auto filter-bar flex ">

            {allCategories.map(ctg => (
                ctg
                    ? <button
                        onClick={() => handleFilterChange('category', ctg)}
                        className={`px-4 py-2 m-2 rounded-3xl border-2 border-gray-400 transition-all capitalize hover:bg-orange-200 ${categoryFilter === ctg
                            ? "bg-slate-600 text-white"
                            : ""
                            }`
                        }
                    >
                        {
                            ctg ||
                            <>
                                <span className="text-xs"><RxCross2 /></span>
                                Clear filter
                            </>
                        }
                    </button>

                    : <div className="absolute right-6 bg-orange-200 ml-2 lg:static lg:bg-transparent">
                        <button
                            onClick={() => handleFilterChange('category', ctg)}
                            className={`px-4 py-2 m-2 rounded-3xl border-2 text-red-400 border-red-400 transition-all hover:bg-orange-200 inline-flex items-center gap-1`}
                        >
                            <span className="text-xs"><RxCross2 /></span>
                            Clear filter
                        </button>
                    </div>
            ))}
        </div>
    )
}