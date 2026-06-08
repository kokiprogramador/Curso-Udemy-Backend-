"use strict";

import { CLIENT_TABLE } from "../models/clients.model.js";
import { DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface) {
    await queryInterface.changeColumn(CLIENT_TABLE, "user_id", {
      field: "user_id",
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    });
  },

  async down(queryInterface) {},
};
