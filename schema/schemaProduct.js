import Joi from "joi";

const name = Joi.string().alphanum().min(3).max(10);
const price = Joi.number().integer().min(10);
const details = Joi.string().min(10);
const id = Joi.string().uuid();
const categoryId = Joi.number().integer();

export const schemaProductCreate = Joi.object({
  name: name.required(),
  price: price.required(),
  details: details.required(),
  categoryId: categoryId.required(),
});

export const updateSchemaProduct = Joi.object({
  name: name,
  price: price,
  details: details,
  categoryId: categoryId,
});

export const getProductSchema = Joi.object({
  id: id.required(),
});
