const db = require("../../database/db");

const all = async () => {
  const users = await db.query("select * from routines");
  return users;
};

const find = async (id) => {
  const response = await db.query(
    "SELECT * FROM routine WHERE id = ? LIMIT 1",
    [id]
  );
  return response[0];
};

const store = async (routine) => {
  await db.query("INSERT INTO routine (user_id) VALUES (?)", [routine.user_id]);
  return true;
};

module.exports = { all, store, find };
