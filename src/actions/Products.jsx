"use server";

import clientPromise from "@/component/lib/mongodb";

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
