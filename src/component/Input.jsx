'use client'
import { useState } from "react"

export default function Input(){
    const [name, setName] = useState('')
    console.log("This is a Input field")

    return(
        <h1>This is a input</h1>
    )
}