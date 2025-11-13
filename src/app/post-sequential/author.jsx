export async function Author({ userId }) {

    await new Promise(resolve => setTimeout(resolve, 2000))

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const result = await response.json();

  return <div>
    <p>writen by: {result.name}</p>
  </div>;
}
