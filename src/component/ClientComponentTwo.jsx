"use client"

import { useState } from "react"

export function ClientComponentTwo(){

    const [name, setName] = useState('Allen')

    return <h1>Client component two</h1>
}