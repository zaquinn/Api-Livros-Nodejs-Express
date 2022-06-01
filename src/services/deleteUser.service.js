import users from "../database";

const deleteUserService = (id) => {
  const userIndex = users.findIndex((eachUser) => eachUser.id === id);

  if (userIndex === -1) {
    return "User not found.";
  }

  users.splice(userIndex, 1);

  return "User successfully deleted.";
};

export default deleteUserService;
