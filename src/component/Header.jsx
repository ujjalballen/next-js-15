"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Header(){

    const pathName = usePathname();
    console.log(pathName)

    return(
        <header>
            <nav className="flex gap-2 item-center">
                <Link className={`${pathName === '/' ? 'text-green-500 font-bold': ''}`} href={'/'}>Home</Link>
                <Link className={`${pathName === '/about' ? 'text-green-500 font-bold': ''}`} href={'/about'}>About</Link>
                <Link className={`${pathName === '/counter' ? 'text-green-500 font-bold': ''}`} href={'/counter'}>Counter</Link>
                <Link className={`${pathName === '/articles/10?key=Password&value=224455' ? 'text-green-500 font-bold': ''}`} href={'/articles'}>Articles</Link>
            </nav>
        </header>
    )
}