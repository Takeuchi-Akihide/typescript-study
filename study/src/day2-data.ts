export type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "member";
  profile?: {
    bio?: string;
  };
};

export const users: User[] = [
  {
    id: 1,
    name: "Taro",
    email: "taro@example.com",
    role: "admin",
    profile: {
      bio: "Backend engineer",
    },
  },
  {
    id: 2,
    name: "Hanako",
    email: "hanako@example.com",
    role: "member",
  },
  {
    id: 3,
    name: "Jiro",
    email: "jiro@example.com",
    role: "member",
    profile: {
      bio: "Frontend learner",
    },
  },
];
