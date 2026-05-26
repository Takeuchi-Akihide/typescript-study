import type { User } from "../types";
import { UserCard } from "./UserCard";

type UserListProps = {
  users: User[];
  onDeleteUser: (id: number) => void;
};

export function UserList({ users, onDeleteUser }: UserListProps) {
  return (
    <ul>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onDeleteUser={onDeleteUser}
        />
      ))}
    </ul>
  );
}
