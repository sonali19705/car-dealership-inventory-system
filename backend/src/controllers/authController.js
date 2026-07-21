const { registerUser } = require("../services/authService");

const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);

    return res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    if (error.message === "Email already registered") {
      return res.status(409).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  register,
};