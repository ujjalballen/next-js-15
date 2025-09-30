'use client'
import { useEffect } from 'react'


export default function Error({error}){

      useEffect(() => {
    // Log the error to an error reporting service
    console.log(error.message)
  }, [error])

    return(
        <p>{error.message}</p>
    )
}