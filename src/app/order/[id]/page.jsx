import { redirect, RedirectType  } from "next/navigation";

const user = false

export default function OrderDynamicPage(){

    if(!user){
        redirect('/')
    }

    return(
        <div>
            <div>
                Dynamic page for order
            </div>
        </div>
    )
}