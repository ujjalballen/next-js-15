
import Header from "@/component/Header";


export default function CounterLayout({children}){
const user = null;

if(!user){
    throw new Error('User not Found')
}

    return(
        <>
     <Header />
        <main>
            {children}
        </main>
       
        </>
    )
}