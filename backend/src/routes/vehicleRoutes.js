const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const validateVehicle = require("../middleware/validateVehicle");

router.get("/search", vehicleController.searchVehicles);
router.get("/", vehicleController.getAllVehicles);
router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    validateVehicle,
    vehicleController.createVehicle
);
router.put(
    "/:id",
    authMiddleware,
    adminMiddleware,
    validateVehicle,
    vehicleController.updateVehicle
);
router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    vehicleController.deleteVehicle
);
router.post(
    "/:id/purchase",
    authMiddleware,
    vehicleController.purchaseVehicle
);
module.exports = router;