type User = {
  id: number;
  name: string;
  email: string;
};

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchUsers(): Promise<User[]> {
  const response = await fetch(`${API_BASE_URL}/users`);

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status}`);
  }

  const users: User[] = await response.json();

  return users.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
  }));
}

async function fetchUserById(id: number): Promise<User> {
  const response = await fetch(`${API_BASE_URL}/users/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch user ${id}: ${response.status}`);
  }

  const user: User = await response.json();

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};

async function main() {
  try {
    const users = await fetchUsers();
    const displayUsers = users.map((user) => {
      return {
        id: user.id,
        label: `${user.name} <${user.email}>`,
      };
    });
    const user1 = await fetchUserById(1);

    console.log("users:");
    console.log(users.slice(0, 3));
    console.log(displayUsers);
    console.log("user1:");
    console.log(user1);
  } catch (error) {
    console.error("error:");
    console.error(error);
  }
}

main();
