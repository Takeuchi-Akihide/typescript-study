import { useState } from "react";
import type { User } from "./types";
import { UserList } from "./component/UserList";
import { UserForm } from "./component/UserForm";

const initialUsers: User[] = [
  {
    id: 1,
    name: "Taro Yamada",
    email: "taro@example.com",
  },
  {
    id: 2,
    name: "Hanako Suzuki",
    email: "hanako@example.com",
  },
];

export function App() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  function handleAddUser(name: string, email: string) {
    const newUser: User = {
      id: Date.now(),
      name,
      email,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  return (
    <main>
      <h1>User Management</h1>
      <UserForm onAddUser={handleAddUser}></UserForm>
      <UserList users={users} />
    </main>
  );
}
