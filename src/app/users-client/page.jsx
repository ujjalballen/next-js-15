"use client"

import { useEffect, useState } from "react";

export default function UsersClient() {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response) {
          throw new Error("Faild to fetch users");
        }

        const result = await response.json();
        setUsers(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("unknow error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-3">
      <h1>Users Client</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}className="border border-white p-2">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
