import { users } from "../database";

const verifyOwnership = (request, response, next) => {
  const { owner_id } = request.params;

  const checkOwnership = users.find((eachUser) => eachUser.id === owner_id);

  if (!checkOwnership) {
    return response.status(400).json({
      message: "Only the owner has access to manage this book.",
    });
  }
  next();
};

export default verifyOwnership;
