"use client"

import { serverSideFunction } from "../utills/server-utils"

export default function ClientRoutePage(){

    const result = serverSideFunction()

    return(
        <div>Client route: {result}</div>
    )
}