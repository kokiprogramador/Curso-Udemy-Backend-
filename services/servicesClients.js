import { Boom } from "@hapi/boom";
import { sequelize } from "../libs/sequelize.js";

const models = sequelize.models;

const getAllClients = async (req, res) => {
  try {
    const response = await models.Clients.findAll({
      include: ["User"],
    });
    return res.status(200).json({ response });
  } catch (error) {
    console.error("Error al obtener clientes", error);
    return res.status(500).json({ message: "Error" });
  }
};

const getClientById = async (id) => {
  try {
    const client = await models.Clients.findByPk(id);
    if (!client) {
      throw Boom.notFound("Cliente no encontrado");
    }
    return client;
  } catch (error) {
    console.error("Error al obtener el cliente", error);
  }
};

const createClient = async (body) => {
  try {
    const newUser = await models.User.create(body.user);
    const newClient = await models.Clients.create({
      ...body,
      userId: newUser,
    });
    return (newClient, newUser);
  } catch (error) {
    console.error("Error al crear cliente", error);
  }
};

const updateClient = async ({ id, body }) => {
  try {
    const client = await models.Clients.findByPk(id);
    if (!client) {
      throw Boom.notFound("Cliente no encontrado");
    }
    const response = await client.update(body);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteClient = async (id) => {
  try {
    const client = await models.Clients.findOne(id);
    await client.destroy();
    return {
      message: "Cliente borrado",
      id,
    };
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
