import { Router } from "express";
import { validationschema } from "../middlewares/validateSchema";
import { usersSchema } from "../schemas/users.schemas";
import { deleteUser, getUser, postUser, updateUser } from "../controllers/users.controllers";

const usersRouter = Router();

usersRouter.post("/users", validationschema(usersSchema), postUser );
usersRouter.get("/users", getUser);
usersRouter.delete("/users/:id", deleteUser);
usersRouter.put("/users/:id", updateUser);

export default usersRouter;