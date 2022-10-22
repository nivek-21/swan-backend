const db = require('../../database/db')

const all = async () => {
    const users = await db.query('select * from usuarios')
    return users
}

const store = async (routine) => {
    const users = await db.query(`INSERT INTO usuarios (nombre, tipo, correo, contrasena, celular) VALUES ('${routine.nombre}', ${routine.tipo}, '${routine.correo}', '${routine.contrasena}', '${routine.celular}')`)
    return true
}

module.exports = { all, store }