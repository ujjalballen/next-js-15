"use server";

import clientPromise from "@/component/lib/mongodb";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export async function createProduct(previousState, formData) {
  const title = formData.get("title");
  const price = formData.get("price");
  const description = formData.get("description");

  const errors = {};

  if (!title) {
    errors.title = "Title is Required";
  }
  if (!price) {
    errors.price = "Price is Required";
  }
  if (!description) {
    errors.description = "description is Required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const client = await clientPromise;
  const db = client.db(process.env.DATABASE_NAME);
  const forms = db.collection("forms");

  const data = { title, price, description };

  const result = await forms.insertOne(data);

  if (result.insertedId) {
    return {
      errors: {}, // Clear any previous errors
      message: "Product added successfully!", // Add a success message
    };
  }
}


export async function deleteProduct(productId){
  console.log(`Attempting to delete user with ID: ${productId}`);
  const id = new ObjectId(productId);
    const client = await clientPromise;
  const db = client.db(process.env.DATABASE_NAME);
  const forms = db.collection("forms");

  const query = {_id: id};
  const result = await forms.deleteOne(query);

  if(result.deletedCount === 1){
    revalidatePath('/products-db')
  }

}
