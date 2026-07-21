const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

router.get("/search", vehicleController.searchVehicles);
router.get("/", vehicleController.getAllVehicles);


module.exports = router;