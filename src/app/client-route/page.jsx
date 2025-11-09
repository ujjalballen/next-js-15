"use client"

import { serverSideFunction } from "../utills/server-utils"
import { useTheme } from "@/component/ThemeProvider"

export default function ClientRoutePage(){

    // const result = serverSideFunction()

    const theme = useTheme();
    console.log(theme.colors.primary)

    return(
        <div>
            <h1 style={{color: theme.colors.primary}}>Hello primary color</h1>
            <h1 style={{color: theme.colors.secondary}}>Hello secondary color</h1>
        </div>
    )
}