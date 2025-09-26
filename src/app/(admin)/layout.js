export default function AdminLayout({children}){

    return(
        <>
        <header>
            This is for Dashboard layout
        </header>
        <main>
            {children}
        </main>
        <footer>
            This is our Dashboard Footer
        </footer>
        </>
    )
}