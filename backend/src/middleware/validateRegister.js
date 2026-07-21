const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters",
    });
  }

  next();
};

module.exports = validateRegister;