import Image from "next/image";
import { details } from "../../page";
import Modal from "@/component/Modal";

export default async function PhotoModal({
  params,
}) {

  const { id } = await params;
  const photo = details.find((p) => p.id === id);

  return (
    <Modal>
      <Image
      width={400}
      height={400}
        alt={photo.title}
        src={photo.image}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">Hello</h2>
        
      </div>
    </Modal>
  );
}