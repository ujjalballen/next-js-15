import { redirect, RedirectType  } from "next/navigation";

// const user = false

const num = 1

export default async function OrderDynamicPage({params}){

    // if(!user){
    //     redirect('/')
    // }

    const {id} = await params;
    
    if(num !== Number(id)){
        throw new Error('error handling review')
    }

    return(
        <div>
            <div>
                Dynamic page for order
            </div>
        </div>
    )
}