import { users, type User } from "./day2-data";

const names = users.map((user) => user.name);
console.log("names:", names);

const members = users.filter((user) => user.role === "member");
console.log("members:", members);

const displayAdminUsers = users
.filter((user) => user.role === "admin")
.map((user) => {
  return {
    id: user.id,
    text: `${user.name} is admin`
  };
});
console.log(displayAdminUsers);

const taro = users.find((user) => user.name === "Taro");
console.log("taro:", taro);

const id999 = users.find((user) => user.id === 999);
console.log("id999:", id999 ?? "User not found")

const displayUsers = users.map((user) => {
  return {
    id: user.id,
    label: `${user.name} <${user.email}>`,
    bio: user.profile?.bio ?? "No bio",
  };
});

console.log("displayUsers:", displayUsers);

const updateUserName = (targetId: number, newName: string): User[] => {
  return users.map((user) => {
    if (user.id === targetId) {
      return {
        ...user,
        name: newName,
        id: 10,
      };
    }
    
    return user;
  });
};

const updateUsers = updateUserName(2, "Hanako Updated");
console.log("updateUsers:", updateUsers);
