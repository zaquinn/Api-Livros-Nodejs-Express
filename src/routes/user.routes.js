import { Router } from "express";

import deleteUserController from "../controllers/userControllers/deleteUser.controller";
import listUsersController from "../controllers/userControllers/listUsers.controller";
import updateUserController from "../controllers/userControllers/updateUser.controller";
import userLoginController from "../controllers/userControllers/userLogin.controller";
import createUserController from "../controllers/userControllers/createUser.controller";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";

const router = Router();

router.get("", listUsersController);
router.post("/login", userLoginController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);
router.put("/:id", verifyAuthTokenMiddleware, updateUserController);
router.post("", verifyEmailAvailabilityMiddleware, createUserController);

export default router;
