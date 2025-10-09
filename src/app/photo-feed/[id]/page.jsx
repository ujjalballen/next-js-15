import Image from "next/image";
import { details } from "../page";

export default async function PhoneFeeDynamic({params}){

    const {id} = await params;

    let photo = details.find(i => i.id === id);
    console.log(photo)

    return(
<div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.title}</h1>
        </div>
        <Image
        width={200}
        height={150}
          alt={photo.title}
          src={photo.image}
          className="w-full object-cover aspect-square "
        />


      </div>
    </div>

    )
}