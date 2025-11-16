import clientPromise from "@/component/lib/mongodb";

export default async function AddProductPage() {
  async function createProduct(formData) {
    "use server";

    const title = formData.get('title')
    const price = formData.get('price')
    const description = formData.get('description')


    const client = await clientPromise;
    const db = client.db(process.env.DATABASE_NAME);
    const forms = db.collection("forms");

    const data = {title, price, description};

    const result = await forms.insertOne(data);

    if(result.insertedId){
       console.log('successfully submit')
    }
  }

  return (
    <form action={createProduct} className="p-4 space-y-4 max-w-96">
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full bg-white p-2 text-black border rounded"
          name="title"
        />
      </label>
      <label className="text-white">
        Price
        <input
          type="number"
          className="block bg-white w-full p-2 text-black border rounded"
          name="price"
        />
      </label>
      <label className="text-white">
        Description
        <textarea
          className="block w-full bg-white p-2 text-black border rounded"
          name="description"
        />
      </label>
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
      >
        Add Product
      </button>
    </form>
  );
}
