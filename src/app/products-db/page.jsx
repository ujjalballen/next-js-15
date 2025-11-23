import clientPromise from "@/component/lib/mongodb";
import ProductDetailsPage from "./productsDetails";

export default async function AllProductsPage({ searchParams }) {
  const { query } = await searchParams;
  console.log(query);

  const client = await clientPromise;
  const db = client.db(process.env.DATABASE_NAME);
  const forms = db.collection("forms");

  let makingQuery = {};
  if (query) {
    makingQuery = { title: query};
  };
  const results = await forms.find(makingQuery).toArray();

  const products = JSON.parse(JSON.stringify(results));

  return (
    // <div>
    //   {optimisticProducts.map((product) => (
    //     <div key={product._id} className=" border border-1 mb-3">
    //       <div className="text-white p-2">
    //         <h2>{product.title}</h2>
    //         <p>{product.price}</p>
    //         <p>{product.description}</p>
    //       </div>

    //       {/* <DeleteBtn productId={product._id.toString()} /> */}
    //       <form action={removeProductById.bind(null, product._id)}>
    //         <button className="bg-red-500 p-2 cursor-pointer">Delete</button>
    //       </form>
    //     </div>
    //   ))}
    // </div>

    <>
      <ProductDetailsPage products={products} />
    </>
  );
}
