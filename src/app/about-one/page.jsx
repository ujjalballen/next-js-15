// if i want to force to be a dynamic rendered, then we need to= export const dynamic = "force-dynamic"

import {cookies} from 'next/headers'

export default async function AboutOne(){

    const cookieStore = await cookies();
    const theme = cookieStore.get('theme');
    console.log(theme)

    return (
        <h1>This is a server component</h1>
    )
}