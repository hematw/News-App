import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useState } from "react"

export default function Layout() {
    const [searchWord, setSearchWord] = useState('')

    return (
        <div className=" ">
            <Header setSearchWord={setSearchWord} />
            <div className="max-w-[1320px] m-auto md:px-16 px-6">
                <Outlet context={{ q: searchWord }} />
            </div>
        </div>
    )
}