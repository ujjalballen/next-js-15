import clientPromise from "@/component/lib/mongodb";
import DeleteBtn from "./button";

export default async function AllProductsPage() {
  const client = await clientPromise;
  const db = client.db(process.env.DATABASE_NAME);
  const forms = db.collection("forms");

  const products = await forms.find().toArray();

  return (
    <div>
      {products.map((product) => (
        <div key={product._id} className=" border border-1 mb-3">
          <div className="text-white p-2">
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>

          <DeleteBtn productId={product._id.toString()} />
        </div>
      ))}
    </div>
  );
}
