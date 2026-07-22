import Card from "./Card";
import Logo from "./Logo";
import {
  ShieldCheck,
  CarFront,
  Gauge,
} from "lucide-react";

export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 flex items-center justify-center px-6 py-8">

      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-10 items-center">

        {/* ================= LEFT PANEL ================= */}

        <div className="hidden lg:flex flex-col justify-center">

          <Logo />

          <h1 className="mt-10 text-5xl font-extrabold leading-tight text-slate-900">
            Smarter Way to
            <span className="text-blue-600">
              {" "}
              Manage Vehicles
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
            A modern dealership inventory platform built
            using React, Express, MongoDB and JWT Authentication.
          </p>

          {/* Feature Cards */}

          <div className="grid grid-cols-3 gap-5 mt-12">

            <div className="bg-white rounded-2xl shadow-lg p-5 text-center">

              <ShieldCheck
                size={34}
                className="mx-auto text-blue-600"
              />

              <h3 className="mt-3 font-semibold">
                Secure
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                JWT Authentication
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-5 text-center">

              <CarFront
                size={34}
                className="mx-auto text-blue-600"
              />

              <h3 className="mt-3 font-semibold">
                Inventory
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                Vehicle Management
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-5 text-center">

              <Gauge
                size={34}
                className="mx-auto text-blue-600"
              />

              <h3 className="mt-3 font-semibold">
                Fast
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                React + Express
              </p>

            </div>

          </div>

        </div>

        {/* ================= RIGHT PANEL ================= */}

        <Card className="backdrop-blur-sm p-8 sm:p-10 lg:p-12">

          <div className="mb-8">

            <h2 className="text-4xl font-bold text-slate-900">
              {title}
            </h2>

            <p className="text-slate-500 mt-3">
              {subtitle}
            </p>

          </div>

          {children}

        </Card>

      </div>

    </div>
  );
}