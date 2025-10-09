import Image from "next/image";
import Link from "next/link";

export const details = [
  {
    id: '1',
    image:
      "https://i.ibb.co.com/VcmvY7XQ/moivation.webp",
    title: "This is the best1 image",
  },
  {
    id: '2',
    image:
      "https://i.ibb.co.com/Kj3DpnhS/barry.png",
    title: "This is the best2 image",
  },
  {
    id: '3',
    image:
      "https://i.ibb.co.com/VcmvY7XQ/moivation.webp",
    title: "This is the best3 image",
  },
];

export default function PhotoFeedPage() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {details.map(({ id, image, title }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
          width={200}
          height={150}
              alt={title}
              src={image}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
