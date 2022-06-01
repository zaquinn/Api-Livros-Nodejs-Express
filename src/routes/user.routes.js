import { Router } from "express";

import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import userLoginController from "../controllers/userLogin.controller";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const router = Router();

router.get("", listUsersController);
router.post("/login", userLoginController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);
//falta verbo put

export default router;
