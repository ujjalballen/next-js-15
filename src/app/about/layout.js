import Header from "@/component/Header";

export default function AboutLayout({children}){

    return(
        <>
        <Header />
        <main>
            {children}
        </main>
        </>
    )
}