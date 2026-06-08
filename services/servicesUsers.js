import { Boom } from "@hapi/boom";
//import pool from "../libs/postgres.js";
import { sequelize } from "../libs/sequelize.js";

const models = sequelize.models;

const getAllUsers = async (req, res) => {
  try {
    const response = await models.User.findAll({
      include: ["clients"],
    });
    return res.status(200).json({ response });
  } catch (error) {
    console.error("Error al obtener usuarios", error);
    return res.status(500).json({ message: "Error" });
  }
};

const getUserById = async (id) => {
  try {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw Boom.notFound("Usuario no encontrado");
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (body) => {
  try {
    const newUser = await models.User.create(body);
    return {
      user: newUser,
      message: "User creado",
    };
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async ({ id, body }) => {
  try {
    const user = await models.User.findByPk(id);
    if (!user) {
      return {
        error: "Usuario no encontrado",
      };
    }
    const response = await user.update(body);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {
  try {
    const user = await models.User.findOne(id);
    await user.destroy();
    return {
      message: "Usuario borrado",
      id,
    };
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
