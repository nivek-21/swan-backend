const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const v1AuthRoutes = require("./v1/routes/exerciseRoutes");
const v1RoutineRoutes = require("./v1/routes/routineRoutes");
const v1UserRoutes = require("./v1/routes/userRoutes");
const v1RoleRoutes = require("./v1/routes/roleRoutes");
const v1ExerciseRoutes = require("./v1/routes/exerciseRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", v1AuthRoutes);
app.use("/api/v1", v1RoutineRoutes);
app.use("/api/v1", v1UserRoutes);
app.use("/api/v1", v1RoleRoutes);
app.use("/api/v1", v1ExerciseRoutes);

app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});
