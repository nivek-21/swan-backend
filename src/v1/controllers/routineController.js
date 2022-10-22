const db = require('../../database/db')
const routineModel = require('../models/routineModel')

const index = async (req, res) => {
    const users = await routineModel.all()
    return res.json(users)
}

const show = async (req, res) => {
    const id = req.params.id
    const users = await db.query(
        'Select * from usuarios where id=' + id
    )
    res.json(users[0])
}

const store = async(req, res) => {
    const body = req.body
    const result = await routineModel.store(body)
    res.json(users)
}

const update = (req, res) => {}
const destroy = (req, res) => {}

module.exports = { index, show, store, update, destroy }