export default async function UserInfo() {
  const userData = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const result = await userData.json();

  console.log("this is a server component");
  return (
    <div>
      <h2>{result.name}</h2>
      
      <p>{result.email}</p>

    </div>

  );
}
