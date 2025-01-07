
import Link from 'next/link'
import Item from './item'
const Navbar = () => {
    return (
        <nav className='flex items-end  justify-end gap-4 w-full mb-20 pb-8 border-b-2 border-slate-200'>
            {/* Logo */}
            <Link
                href={"/"}
                className='text-5xl px-4 py-2 mr-auto text-slate-700 font-sans font-black uppercase tracking-widest visited:text-slate-600 border-4 border-slate-700 shadow-lg active:translate-y-0.5 transition-all duration-150 rounded'>
                Gallery
            </Link>

            {/* nav items */}
            {
                navItems.map((item, i) => (
                    <Item key={i} {...item} />
                ))}
        </nav>
    )
}
export default Navbar


const navItems = [
    { label: 'Photo', url: "/?catagory=photo" },
    { label: 'Vector', url: "/?catagory=vector" },
]
