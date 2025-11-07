"use client"

import { useState } from "react";

export default function ClientCom(){

    const [name, setName] = useState('');


    console.log(name)

    return(
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <div>Typeing name: {name}</div>
        </div>
    )
}