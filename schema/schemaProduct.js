import Joi from "joi";

const name = Joi.string().alphanum().min(3).max(10);
const price = Joi.number().integer().min(10);
const id = Joi.string().uuid();

export const schemaProductCreate = Joi.object({
  name: name.required(),
  price: price.required(),
});

export const updateSchemaProduct = Joi.object({
  name: name,
  price: price,
});

export const getProductSchema = Joi.object({
  id: id.required(),
});
