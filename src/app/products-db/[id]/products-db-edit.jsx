"use client";

import { createProduct } from "@/actions/Products";
import { useActionState } from "react";


  const initialState = {
    errors: {},
     message: null, // Initialize message field
  };

export default function EdditProductFormComponent({product}) {

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );


  console.log(state)

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full bg-white p-2 text-black border rounded"
            name="title"
            defaultValue={product.name}
          />
        </label>
        {state.errors.title && (
          <p style={{ color: "red" }}>{state.errors.title}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Price
          <input
            type="number"
            className="block bg-white w-full p-2 text-black border rounded"
            name="price"
            defaultValue={product.userId}
          />
        </label>
        {state.errors.price && (
          <p style={{ color: "red" }}>{state.errors.price}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Description
          <textarea
            className="block w-full bg-white p-2 text-black border rounded"
            name="description"
            defaultValue={product.email || ''}
          />
        </label>
        {state.errors.description && (
          <p style={{ color: "red" }}>{state.errors.description}</p>
        )}
      </div>

      {/* <Submit /> */}

      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        {isPending ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
}
