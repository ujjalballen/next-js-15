import { Card } from "@/component/Card";
import Link from "next/link";

export default function Archived(){

    return(
        <Card>
            <div>Archived</div>
            <div>
                <Link href="/complex-dashboard">Default</Link>
            </div>
        </Card>
    )
}