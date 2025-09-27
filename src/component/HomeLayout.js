import Link from "next/link"

export default function HomeLayout({children}){

    return(
        <>
        <header>
            <nav className="flex gap-2 item-center">
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/counter'}>Counter</Link>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer>
            This is a Home Footer
        </footer>
        </>
    )

}