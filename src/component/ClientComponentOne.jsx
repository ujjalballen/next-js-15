"use client"

import { useState } from "react"
// import { ServerComponentOne } from "./ServerComponentOne"
// import { ClientComponentTwo } from "./ClientComponentTwo"

export function ClientComponentOne({children}){

    const [name, setName] = useState('Ujjal')

    return (
        <>
        <h1>Client component one</h1>
        {/* <ClientComponentTwo /> */}

        {children}
        </>
    )
}