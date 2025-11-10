import fs from 'fs'
import { ClientComponentOne } from './ClientComponentOne'
// import { ServerComponentTwo } from './ServerComponentTwo'

export function ServerComponentOne(){
    fs.readFileSync("src/component/ServerComponentOne.jsx", "utf-8")

    return(
       <>
        <h1>Server Component two</h1>
        {/* <ServerComponentTwo /> */}

        <ClientComponentOne />
       </>
    )
}