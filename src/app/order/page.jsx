'use client'

import {useRouter } from 'next/navigation'

export default function OrderProduct(){

    const router = useRouter();

    const handleClick = ()=> {
        console.log('ok')

        router.replace('/')
    }

    return(
        <div>
            <div>
                This is a Order Product page
            </div>

            <button onClick={handleClick} className="p-2 border border-green-500 text-center cursor-pointer hover:bg-green-400 hover:text-black">Place Order</button>
        </div>
    )
}