const validateVehicle = (req, res, next) => {
    const { make, model, category, price, quantity } = req.body;

    if (!make || make.trim() === "") {
        return res.status(400).json({ message: "Make is required" });
    }

    if (!model || model.trim() === "") {
        return res.status(400).json({ message: "Model is required" });
    }

    if (!category || category.trim() === "") {
        return res.status(400).json({ message: "Category is required" });
    }

    if (
        price === undefined ||
        typeof price !== "number" ||
        price < 0
    ) {
        return res.status(400).json({
            message: "Valid price is required",
        });
    }

    if (
        quantity === undefined ||
        typeof quantity !== "number" ||
        quantity < 0
    ) {
        return res.status(400).json({
            message: "Valid quantity is required",
        });
    }

    next();
};

module.exports = validateVehicle;