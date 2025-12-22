import React, { useContext } from "react";

import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router";


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => console.log("Logged out"))
      .catch((err) => console.error(err));
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-red-600 font-semibold"
      : "text-gray-700 hover:text-red-500";

  return (
    <nav className="navbar bg-base-100 shadow-lg px-4 md:px-10 sticky top-0 z-50">
      {/* LEFT */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-56"
          >
            <li><NavLink to="/all-requests">All Requests</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>
            <li><NavLink to="/donate">Donate</NavLink></li>
            {user && (
              <li>
                <NavLink to="/dashboard/maindashboard">
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide"
        >
          Mes<span className="text-red-600">Blood</span>Bank
        </Link>
      </div>

      {/* CENTER (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 text-base">
          <li><NavLink to="/all-requests" className={navLinkStyle}>All Requests</NavLink></li>
          <li><NavLink to="/search" className={navLinkStyle}>Search</NavLink></li>
          <li><NavLink to="/donate" className={navLinkStyle}>Donate</NavLink></li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end flex items-center gap-3">
        {/* Dashboard button – FIXED (always visible when logged in) */}
        {user && (
          <NavLink
            to="/dashboard/maindashboard"
            className="btn btn-outline btn-error btn-sm"
          >
            Dashboard
          </NavLink>
        )}

        {/* User avatar */}
        {user && (
          <div className="avatar">
            <div className="w-9 rounded-full ring ring-red-500 ring-offset-base-100 ring-offset-2">
              <img
                src={user.photoURL || "https://i.ibb.co/2kRz1Xy/user.png"}
                alt="user"
              />
            </div>
          </div>
        )}

        {/* Auth Button */}
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-primary btn-sm"
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="btn btn-primary btn-sm">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
