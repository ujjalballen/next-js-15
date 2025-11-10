import fs from 'fs'

export function ServerComponentTwo(){
    fs.readFileSync("src/component/ServerComponentTwo.jsx", "utf-8")

    return(
        <h1>Server Component two</h1>
    )
}