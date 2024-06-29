import { Link } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";

export default function NotFound() {
    return (
        <div className="flex items-center w-full justify-around">
            <div>
                <h1 className="text-[120px] font-bold text-slate-700">404</h1>
                <h1 className="text-6xl font-bold text-slate-700">You Lost ???</h1>
                <h2 className="mt-4 tracking-wider text-2xl text-slate-600">What are you doing here?</h2>
                <Link
                    to='/'
                    className="bg-slate-700 text-slate-100 py-2 px-4 rounded-lg text-lg mt-6 inline-flex items-center"
                >
                    <span className="mr-2">
                        <GoArrowLeft />
                    </span>
                    Back to Home
                </Link>

            </div>
            <div >
                <img
                    src="/what.png"
                    alt="Photo of a man"
                    className="w-[650px]"
                />
            </div>
        </div>
    )
}