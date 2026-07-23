import { Link, useNavigate } from "react-router-dom";
import Logo from "../common/Logo";
import Button from "../common/Button";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const firstName = user?.name?.trim().split(" ")[0] || "";

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-3">

          {/* Logo */}
          <Link
            to={user?.role === "admin" ? "/admin" : "/dashboard"}
            className="flex-1 min-w-0"
          >
            <Logo compact />
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-3 flex-shrink-0">

            {user && (
              <div className="hidden md:flex flex-col items-end leading-tight">
                <span className="text-base font-semibold text-gray-900">
                  {firstName}
                </span>

                <span className="text-sm text-gray-500 capitalize">
                  {user.role}
                </span>
              </div>
            )}

            <Button
              onClick={handleLogout}
              className="px-4 py-2 text-sm whitespace-nowrap"
            >
              Logout
            </Button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;