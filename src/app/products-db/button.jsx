"use client"

import { deleteProduct } from "@/actions/Products"

export default function DeleteBtn({productId}){

    const deleteUserWithId = deleteProduct.bind(null, productId)
 
    return(
        <form action={deleteUserWithId}>
            <button className="bg-red-500 p-2 cursor-pointer">Delete</button>
          </form>
    )
}