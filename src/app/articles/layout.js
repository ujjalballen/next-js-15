import Header from "@/component/Header";

export default function AticlesLayout({children}){

    return(
        <>
     <Header />
        <main>
            {children}
        </main>
       
        </>
    )
}