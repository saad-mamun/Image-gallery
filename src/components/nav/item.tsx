
import Link from 'next/link'
import { FC } from 'react';

type TProps = { label: string, url: string };

const Item: FC<TProps> = ({ url, label }) =>
(
    <Link
        href={url}
        className="inline-block p-2 text-lg text-slate-800 hover:text-white tracking-wider relative uppercase  group z-20 after:content-[''] after:absolute after:left-0 after:bottom-1 after:bg-slate-800 after:w-full after:h-px after:hover:h-9 after:-z-20 after:transition-all after:duration-150 after:rounded-md"
    >
        {label}
    </Link>
)
export default Item
