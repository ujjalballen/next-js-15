import { serverSideFunction } from "../utills/server-utils"
import { clientSideFunction } from "../utills/client-utils"

export default function ServerRoutePage(){
const result = serverSideFunction();
const clientRe = clientSideFunction();

    return(
        <div>server route: {result}
        <div>
            client route: {clientRe}</div></div>
        
    )
}