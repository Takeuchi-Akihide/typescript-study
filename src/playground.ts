import { fetchUsers, fetchUserById } from "./api/users";

async function main() {
  const usersResult = await fetchUsers();

  if (usersResult.ok) {
    console.log("users:");
    console.log(usersResult.data);
  } else {
    console.error("Users error:");
    console.error(usersResult.error);
  }

  const userResult = await fetchUserById(1);
  
  if (userResult.ok) {
    console.log("user:");
    console.log(userResult.data);
  } else {
    console.error(`User error by status ${userResult.status}`);
    console.error(userResult.error);
  }
}

main();
