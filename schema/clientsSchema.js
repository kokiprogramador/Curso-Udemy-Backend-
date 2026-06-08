import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const email = Joi.string().email();
const password = Joi.string();
const lastName = Joi.string();
const phone = Joi.string();
const userId = Joi.number().integer();

export const schemaClientsCreate = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  }),
});

export const updateClientsSchema = Joi.object({
  name,
  lastName,
  phone,
  userId,
});

export const getClientsSchema = Joi.object({
  id: id.required(),
});
