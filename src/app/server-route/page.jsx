import { serverSideFunction } from "../utills/server-utils"

export default function ServerRoutePage(){
const result = serverSideFunction()
    return(
        <div>server route: {result}</div>
    )
}