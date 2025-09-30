import Header from "./Header"

export default function HomeLayout({children}){

    return(
        <>
        <Header />
        <main>
            {children}
        </main>
        <footer>
            This is a Home Footer
        </footer>
        </>
    )

}