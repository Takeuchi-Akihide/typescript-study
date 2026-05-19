const user = {
  id: 1,
  name: "Taro",
  email: "taro@example.com",
  age: 30,
}

const users = [
  user,
  {
    id: 2,
    name: "Hanako",
    email: "hanako@example.com",
    age: 20,
  },
];

function formatUser(user: {id: number; name: string; email: string}): string {
  return `${user.id}: ${user.name} <${user.email}>`;
}

// const formatUser = ({ id, name, age, email }: {id: number; name: string; age: number; email: string }): string => {
//   return `${id}: ${name} (${age}) <${email}>`
// }

const formatUserArrow = (user: { id: number; name: string; email: string; age: number}): string => {
  const { id, name, age, email} = user;
  return `${id}: ${name} (${age}) <${email}>`;
}

console.log(formatUser(user));
console.log(formatUserArrow(users[1]));

const [firstUser, secondUser] = users;

console.log("first:", firstUser.name);
console.log("second:", secondUser.name);
