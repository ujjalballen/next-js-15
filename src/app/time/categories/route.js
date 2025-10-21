export const dynamic = "force-static"

export async function GET(request){
    const categories = [
        {id: 1, name: "Barry"},
        {id: 2, name: "Barry One"},
        {id: 2, name: "Barry Two"},
        {id: 4, name: "Barry Three"},
    ];

    return Response.json(categories)
}