import { users } from "../../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = async (email, password) => {
  const user = users.find((eachUser) => eachUser.email === email);

  if (!user) {
    return "Email ou senha inválidos!";
  }

  const passwordMatch = await bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return "Email ou senha inválidos";
  }

  const token = jwt.sign({ email: email }, "sdfDFG!@#%ASDFAS", {
    expiresIn: "24h",
  });

  return { token };
};

export default userLoginService;
