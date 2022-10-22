const express = require("express")
const port = process.env.PORT || 3000
const v1AuthRoutes = require('./v1/routes/authRoutes')
const v1RoutineRoutes = require('./v1/routes/routineRoutes')

const app = express()
app.use(express.json())

app.use("/api/v1", v1AuthRoutes)
app.use("/api/v1", v1RoutineRoutes)

app.listen(port, () => {
  console.log(`API is listening on port ${port}`)
})
