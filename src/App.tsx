import { useEffect, useState } from "react";
import type { User } from "./types";
import { UserList } from "./component/UserList";
import { UserForm } from "./component/UserForm";
import { fetchUsers, createUser, deleteUser } from "./api/users";
import { logError, logInfo } from "./utils/logger";

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
        logInfo("users loaded", { count: result.data.length });
      } else {
        setError(result.error);
        logError("failed to load users", result.error);
      }
      setLoading(false);
    }

    loadUsers();
  }, []);

  async function handleAddUser(name: string, email: string) {
    setError(null);

    const result = await createUser(name, email);

    if (result.ok) {
      setUsers((currentUsers) => [...currentUsers, result.data])
    } else {
      setError(result.error);
      logError("failed to create user", result.error);
    }
  }

  async function handleDeleteUser(id: number) {
    setError(null);

    const result = await deleteUser(id);

    if (result.ok) {
      setUsers((currentUsers) =>
        currentUsers.filter((user) => user.id != id)
      );
    } else {
      setError(result.error);
      logError("failed to delete user", result.error);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <h1>User Management</h1>
      {error !== null && <p>{error}</p>}
      <UserForm onAddUser={handleAddUser} />
      <UserList users={users} onDeleteUser={handleDeleteUser}/>
    </main>
  );
}

export default App;
