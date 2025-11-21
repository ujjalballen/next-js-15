import clientPromise from "@/component/lib/mongodb";
import { notFound } from "next/navigation";

export async function getProductById(id) {
  const client = await clientPromise;
  const db = client.db(process.env.DATABASE_NAME);
  const users = db.collection("users");

  const query = { userId: String(id) };

  const result = await users.findOne(query);
  if (result) {
    result._id = result._id.toString();
    return result;
  } else {
    console.log("No product found with the name:", result);
    notFound()
  }
}
