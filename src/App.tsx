import type { User } from "./types";
import { UserList } from "./component/UserList";

const sampleUsers: User[] = [
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
  return (
    <main>
      <h1>User Management</h1>
      <UserList users={sampleUsers} />
    </main>
  );
}
