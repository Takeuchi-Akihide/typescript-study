import express from "express";
import cors from "cors";

type User = {
  id: number;
  name: string;
  email: string;
};

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

app.get("/users", (_req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({ message: "invalid id" });
    return;
  }

  const user = users.find((user) => user.id === id);

  if (user === undefined) {
    res.status(404).json({ message: "user not found" });
    return;
  }

  res.json(user);
});

app.post("/users", (req, res) => {
  const body = req.body as Partial<User>;

  if (typeof body.name !== "string" || typeof body.email !== "string") {
    res.status(400).json({ message: "name and email are required" });
    return;
  }

  const newUser: User = {
    id: Date.now(),
    name: body.name,
    email: body.email,
  };

  users = [...users, newUser];

  res.status(201).json(newUser);
});

app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({ message: "invalid id" });
    return;
  }

  users = users.filter((user) => user.id !== id);

  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Mock API server is running at http://localhost:${port}`);
});
