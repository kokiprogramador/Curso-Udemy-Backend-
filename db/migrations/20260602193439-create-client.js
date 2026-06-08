"use strict";

import { CLIENT_TABLE, ClientSchema } from "../models/clients.model.js";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface) {
    await queryInterface.createTable(CLIENT_TABLE, ClientSchema);
  },

  async down(queryInterface) {
    await queryInterface.drop(CLIENT_TABLE);
  },
};
