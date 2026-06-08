"use strict";

import { UserSchema, USER_TABLE } from "../models/user.model.js";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface) {
    await queryInterface.addColumn(USER_TABLE, "role", UserSchema.role);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, "role", UserSchema.role);
  },
};
