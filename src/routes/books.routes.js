import { Router } from "express";

import listBooksPublicController from "../controllers/booksControllers/listBooksPublic.controller";
import listMyBooksController from "../controllers/booksControllers/listMyBooks.controller";
import createBooksController from "../controllers/booksControllers/createBooks.controller";
import updateBooksController from "../controllers/booksControllers/updateBooks.controller";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyOwnership from "../middlewares/verifyOwnership.middleware";

const router = Router();

router.get("", verifyAuthTokenMiddleware, listBooksPublicController);
router.get(
  "/:owner_id",
  verifyAuthTokenMiddleware,
  verifyOwnership,
  listMyBooksController
);
router.post("", verifyAuthTokenMiddleware, createBooksController);
router.put(
  "/:owner_id",
  verifyAuthTokenMiddleware,
  verifyOwnership,
  updateBooksController
);
//falta delete e testar as rotas no insomnia

export default router;
