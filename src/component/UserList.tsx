import type { User } from "../types";
import { UserCard } from "./UserCard";

type UserListProps = {
  users: User[];
};

export function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
}
