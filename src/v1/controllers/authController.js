const login = (req, res) => {
    return res.json({
        nombre: "kevin",
        apellido: "Gonzalez"
    })
}

module.exports = { login }