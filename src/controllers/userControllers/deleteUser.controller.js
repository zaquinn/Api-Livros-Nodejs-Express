import deleteUserService from "../../services/userServices/deleteUser.service";

const deleteUserController = (request, response) => {
  const { id } = request.params;

  const deletedUser = deleteUserService(id);

  return response.json(deletedUser);
};

export default deleteUserController;
