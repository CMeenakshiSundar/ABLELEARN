const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const interactionRoutes = require("./routes/interaction.routes");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ ROUTES ONLY — NO DB CODE HERE
app.use("/auth", authRoutes);
app.use("/interaction", interactionRoutes);

module.exports = app;
