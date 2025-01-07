import { SearchIcon } from "./icon"
import React from 'react';

const Header = () => {
    return (
        <div className="flex">
            <div className="flex gap-4 items-end w-ful max-w-xl">
                <input type="text" placeholder="Search... "
                    className="inline-block w-full py-2 px-4 bg-slate-100 border-2 border-slate-400 focus:outline-none text-slate-800 rounded" />
                <button>
                    <SearchIcon/>
                </button>
            </div>
        </div>
    )
}

export default Header
