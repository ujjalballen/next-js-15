// import { ServerComponentOne } from "@/component/ServerComponentOne";

import { ClientComponentOne } from "@/component/ClientComponentOne";
import { ServerComponentOne } from "@/component/ServerComponentOne";

export default function InterleavingPage(){

    return (
        <>
        <h1>InterLeaving Page</h1>
        {/* <ServerComponentOne /> */}

        <ClientComponentOne >
            <ServerComponentOne />
        </ClientComponentOne>
        </>
    )
}