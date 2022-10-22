const mysql = require('mysql')
const { promisify } = require('util')
const config = require('../config.json')

const pool = mysql.createPool(config.database)

pool.getConnection((err, connection) => {
    if(connection) connection.release()
})

pool.query = promisify(pool.query)

module.exports = pool