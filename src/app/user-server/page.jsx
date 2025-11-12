export default async function UserServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const results = await response.json();

  console.log(results);

  return (
    <div className="p-3">
      <h1>Users Server</h1>
      <div>
        {results.map((user) => (
          <div key={user.id} className="border border-white p-2">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
