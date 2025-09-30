import Link from "next/link"

export default function ArticlesPage(){

    return(
        <div>
            This is Article main page
            <div>
                <Link className="text-red-400" href={`/articles/10?key=Password&value=123456`}>Page No 10</Link>
            </div>
        </div>
    )
}