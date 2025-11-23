'use client'
import { useOptimistic } from "react";
import { deleteProduct } from "@/actions/Products";
import Form from "next/form";

export default function ProductDetailsPage({products}) {

  const[optimisticProducts, setoptimisticProducts] = useOptimistic(products, (currentProduct, productId) => {
    return currentProduct.filter((product) => product._id !== productId);
  });

  const removeProductById = async(productId) => {
    setoptimisticProducts(productId)
    await deleteProduct(productId)
  }

  return (
    <div>
      {optimisticProducts.map((product) => (
        <div key={product._id} className=" border border-1 mb-3">
          <div className="text-white p-2">
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>

          {/* <DeleteBtn productId={product._id.toString()} /> */}
          <Form action={removeProductById.bind(null, product._id)}>
            <button className="bg-red-500 p-2 cursor-pointer">Delete</button>
          </Form>
        </div>
      ))}

      {/* {
        optimisticProducts.length === 0 (
          <p>Products not found..</p>
        )
      } */}
    </div>
  );
}
