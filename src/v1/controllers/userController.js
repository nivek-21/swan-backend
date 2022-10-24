const db = require("../../database/db");
const userModel = require("../models/userModel");

const index = async (req, res) => {
  const users = await userModel.all();
  return res.json(users);
};

const show = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.find(id);
  res.json(user);
};

const store = async (req, res) => {
  const body = req.body;
  const create = await userModel.store(body);
  res.json(create);
};

const update = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await userModel.update(id, body);
  res.json(true);
};

module.exports = { index, show, store, update };
