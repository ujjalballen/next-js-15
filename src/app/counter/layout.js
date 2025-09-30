import Header from "@/component/Header";

export default function CounterLayout({children}){

    return(
        <>
     <Header />
        <main>
            {children}
        </main>
       
        </>
    )
}