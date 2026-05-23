import type { User } from "../types";

type UserCardProps = {
  user: User,
};

export function UserCard({ user }: UserCardProps) {
  return (
    <li>
      <strong>{user.name}</strong>
      <br />
      <span>{user.email}</span>
    </li>
  );
}
