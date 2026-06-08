import Joi from "joi";

const id = Joi.string().uuid();
const email = Joi.string().email();
const password = Joi.string().min(10);
const role = Joi.string().min(5);

export const schemaUserCreate = Joi.object({
  email: email.required(),
  password: password.required(),
  role: role,
});

export const updateUserSchema = Joi.object({
  email: email,
  role: role,
});

export const getUserSchema = Joi.object({
  id: id.required(),
});
