import { getProductById } from "./getProduct";
import EdditProductFormComponent from "./products-db-edit";

export default async function EdditProductPage({params}) {
    const {id} = await params;

    const product = await getProductById(id);
    console.log(product)

  return (
   <EdditProductFormComponent product={product} />
  );
}
