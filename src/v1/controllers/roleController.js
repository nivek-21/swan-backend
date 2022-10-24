const db = require("../../database/db");
const roleModel = require("../models/roleModel");

const index = async (req, res) => {
  const roles = await roleModel.all();
  return res.json(roles);
};

module.exports = { index };
