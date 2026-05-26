import type { User } from "../types";

type UserCardProps = {
  user: User;
  onDeleteUser: (id: number) => void;
};

export function UserCard({ user, onDeleteUser }: UserCardProps) {
  return (
    <li>
      {user.name} ({user.email})
      <button type="button" onClick={() => onDeleteUser(user.id)}>
        Delete
      </button>
    </li>
  );
}
