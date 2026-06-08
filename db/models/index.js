import { User, UserSchema } from "./user.model.js";
import { Client, ClientSchema } from "./clients.model.js";
import { Category, CategorySchema } from "./category.models.js";
import { Product, ProductSchema } from "./product.model.js";

export const setupModels = (sequelize) => {
  //Models Inits
  User.init(UserSchema, User.config(sequelize));
  Client.init(ClientSchema, Client.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));

  //Models Association
  User.associate(sequelize.models);
  Client.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
};

export default setupModels;
