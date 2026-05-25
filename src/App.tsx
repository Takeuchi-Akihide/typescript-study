import { useEffect, useState } from "react";
import type { User } from "./types";
import { UserList } from "./component/UserList";
import { UserForm } from "./component/UserForm";
import { fetchUsers } from "./api/users";

export function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);
      setError(null);

      const result = await fetchUsers();

      if (result.ok) {
        setUsers(result.data);
      } else {
        setError(result.error);
      }
      setLoading(false);
    }

    loadUsers();
  }, []);

  function handleAddUser(name: string, email: string) {
    const newUser: User = {
      id: Date.now(),
      name,
      email,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error !== null) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <h1>User Management</h1>
      <UserForm onAddUser={handleAddUser}></UserForm>
      <UserList users={users} />
    </main>
  );
}

export default App;
