const express = require("express");
const cors = require("cors");

const app = express();

// TEMPORARY: Allow all origins for testing
app.use(cors());

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);

module.exports = app;