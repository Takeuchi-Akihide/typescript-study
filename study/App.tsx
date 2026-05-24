import { useEffect, useState } from "react";
import { fetchUsers, type User } from "./api/users";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        setError(null);

        const users = await fetchUsers();
        setUsers(users);
      } catch (error) {
        setError("ユーザー一覧の取得に失敗しました");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  if (loading) {
    return <p>読み込み中...</p>;
  }

  if (error !== null) {
    return <p>{error}</p>
  }

  return (
    <div>
      <h1>ユーザー管理</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} / {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
