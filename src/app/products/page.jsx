import Link from "next/link"

export default function Products(){
    return (
        <div>
            <h1>Products Lists</h1>
            <div>
                <Link href={'/product/1'}>Product one</Link>
                <Link href={'/product/2'}>Product two</Link>
                <Link href={'/product/3'}>Product three</Link>
            </div>
        </div>
    )
}