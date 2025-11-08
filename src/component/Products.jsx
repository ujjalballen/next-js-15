export default async function Products(){

    await new Promise((resolve, reject) => setTimeout(resolve, 2000) )

    return(
        <div>Products</div>
    )
}