const db = require("../../database/db");

const all = async () => {
  const exercises = await db.query("select * from exercises");
  return exercises;
};

const find = async (id) => {
  const response = await db.query(
    "SELECT * FROM exercises WHERE id = ? LIMIT 1",
    [id]
  );
  return response[0];
};

const store = async (exercise) => {
  await db.query("INSERT INTO exercises (name) VALUES (?)", [exercise.name]);
  return true;
};

const update = async (id, exercise) => {
  await db.query("UPDATE exercises SET name=? WHERE id=?", [exercise.name, id]);
};

module.exports = { all, store, find, update };
