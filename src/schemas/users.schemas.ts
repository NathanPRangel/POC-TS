import Joi from "joi";
import { CreateUser } from "../protocols/users.protocols";

export const usersSchema = Joi.object<CreateUser>({
    name: Joi.string().required(),
    email: Joi.string().required()
})