const express = require("express");
const cors = require("cors");

const app = express();

// TEMPORARY: Allow all origins for testing
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://car-dealership-inventory-web.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Root route
app.get("/", (req, res) => {
  res.json({
    message: "Car Dealership Inventory API is running",
    status: "OK",
  });
});

const authRoutes = require("./routes/authRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);

module.exports = app;