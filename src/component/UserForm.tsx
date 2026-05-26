import React, { useState, type SubmitEvent } from "react";

type UserFormProps = {
  onAddUser: (name: string, email: string) => void;
};

export function UserForm({ onAddUser }: UserFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "") {
      setError("Name and email are required");
      return;
    }

    setError(null);
    onAddUser(name, email);
    setName("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>

      {error !== null && <p>{error}</p>}
      <button type="submit">Add User</button>
    </form>
  );
}
