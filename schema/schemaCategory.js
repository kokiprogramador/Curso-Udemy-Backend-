import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string();
const image = Joi.string().uri();

export const createCategory = Joi.object({
  name: name.required(),
  image: image.required(),
});

export const updateCategory = Joi.object({
  name: name,
  image: image,
});

export const getCategory = Joi.object({
  id: id.required(),
});

export default {
  createCategory,
  updateCategory,
  getCategory,
};
