export default function HomeLayout({children}){

    return(
        <>
        <header>
            This is Home Header
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