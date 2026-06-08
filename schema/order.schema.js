import Joi from "joi";

const id = Joi.string().integer();
const email = Joi.string().email();
const password = Joistring().min(10);

export const schemaUserCreate = Joi.object({
  email: email.required(),
  password: password.required(),
});

export const updateUserSchema = Joi.object({
  email: email,
});

export const getUserSchema = Joi.object({
  id: id.required(),
});
