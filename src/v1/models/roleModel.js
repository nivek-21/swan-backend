const db = require("../../database/db");

const all = async () => {
  const roles = await db.query("select * from roles");
  return roles;
};

module.exports = { all };
