import userLoginService from "../../services/userServices/userLogin.service";

const userLoginController = async (request, response) => {
  const { email, password } = request.body;

  const userLogin = await userLoginService(email, password);

  return response.json(userLogin);
};

export default userLoginController;
