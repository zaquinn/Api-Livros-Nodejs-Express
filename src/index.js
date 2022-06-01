import express from "express";
import userRouter from "./routes/user.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

const port = 3334;

app.get("/", (request, response) => {
  return response.json({
    message: `O servidor está rodando`,
  });
});

app.listen(port);
