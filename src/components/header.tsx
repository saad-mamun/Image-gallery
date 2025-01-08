
import React from 'react';

const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-4 items-end w-ful max-w-xl">
                <input type="text" placeholder="Search... "
                    className="inline-block w-full py-2 px-4 bg-slate-100 border-2 border-slate-400 focus:outline-none text-slate-800 rounded" />
                <button className='border border-sky-500 rounded px-4 py-2 font-bold uppercase'>Search</button>
            </div>
            <button className='font-bold uppercase bg-slate-800 text-white px-5 py-2 rounded hover:bg-slate-700 transition-all duration-100 active:translate-y-0.5'>Upload</button>
        </div>
    )
}

export default Header
