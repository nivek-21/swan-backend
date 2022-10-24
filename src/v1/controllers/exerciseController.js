// const db = require("../../database/db");
const exerciseModel = require("../models/exerciseModel");

const index = async (req, res) => {
  const exercises = await exerciseModel.all();
  return res.json(exercises);
};

const show = async (req, res) => {
  const id = req.params.id;
  const exercise = await exerciseModel.find(id);
  res.json(exercise);
};

const store = async (req, res) => {
  const body = req.body;
  const create = await exerciseModel.store(body);
  res.json(create);
};

const update = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await exerciseModel.update(id, body);
  res.json(true);
};

module.exports = { index, show, store, update };
