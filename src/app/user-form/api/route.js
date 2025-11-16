import clientPromise from "@/component/lib/mongodb";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DATABASE_NAME);
    const forms = db.collection("forms");

    const formData = await request.json();

    const result = await forms.insertOne(formData);

    return new Response(JSON.stringify({ success: true, insertedId: result.insertedId }), {
        status: 201,
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
