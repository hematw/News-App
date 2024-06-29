import { Outlet } from "react-router-dom"
import Header from "./Header"
import Filter from "./Filter"

export default function Layout() {
    return (
        <div className=" ">
            <Header />
            <div className="max-w-[1320px] m-auto">
                <Filter />
                <Outlet />
            </div>
        </div>
    )
}