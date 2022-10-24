const db = require("../../database/db");

const all = async () => {
  const users = await db.query("select * from users");
  return users;
};

const find = async (id) => {
  const response = await db.query("SELECT * FROM users WHERE id = ? LIMIT 1", [
    id,
  ]);
  return response[0];
};

const store = async (user) => {
  await db.query(
    "INSERT INTO users (name, first_last_name, second_last_name, email, password, address, phone, role_id, is_active) VALUES (?,?,?,?,md5(?),?,?,?,?)",
    [
      user.name,
      user.first_last_name,
      user.second_last_name,
      user.email,
      "pasword",
      user.address,
      user.phone,
      user.role_id,
      user.is_active,
    ]
  );
  return true;
};

const update = async (id, user) => {
  await db.query(
    "UPDATE users SET name=?, first_last_name=?, second_last_name=?, email=?, password=?, address=?, phone=?, role_id=?, is_active=? WHERE id=?",
    [
      user.name,
      user.first_last_name,
      user.second_last_name,
      user.email,
      "hola",
      user.address,
      user.phone,
      user.role_id,
      user.is_active,
      id,
    ]
  );
};

const destroy = async (id) => {
  await db.query("DELETE FROM users WHERE id=?", [id]);
};

module.exports = { all, store, find, update, destroy };
