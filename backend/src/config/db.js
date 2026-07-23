const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (
      process.env.NODE_ENV === "test" &&
      !process.env.MONGODB_URI.includes("car_dealership_test")
    ) {
      throw new Error(
        "Tests are trying to use a non-test database!"
      );
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;