import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/common/AuthLayout";
import Input from "../../components/common/Input";
import PasswordInput from "../../components/common/PasswordInput";
import Button from "../../components/common/Button";
import Alert from "../../components/common/Alert";
import Loader from "../../components/common/Loader";

import { register } from "../../services/authService";

export default function Register() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {

      setError("Passwords do not match.");

      return;

    }

    setLoading(true);

    try {

      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      setSuccess("Registration successful.");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Registration failed."
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <AuthLayout
      title="Create Account 🚗"
      subtitle="Join Car Dealership Inventory System to manage your dealership."
    >

      <Alert
        message={error}
        type="error"
      />

      <Alert
        message={success}
        type="success"
      />

      <form
        onSubmit={handleSubmit}
        className="space-y-5 mt-6"
      >

        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Create password"
          required
        />

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          required
        />

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? (
            <Loader text="Creating Account..." />
          ) : (
            "Register"
          )}
        </Button>

      </form>

      <div className="mt-8 text-center">

        <p className="text-slate-600">

          Already have an account?

          {" "}

          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </AuthLayout>
  );

}