// Aside.jsx

import { Home, Users, Settings } from "lucide-react";
import { NavLink } from "react-router";

const Aside = () => {
  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-5">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold mb-10">AdminPanel</h1>

      {/* Navigation */}
      <nav className="space-y-3">
        <NavLink
          to="/dashboard/maindashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition
            ${isActive ? "bg-blue-600 text-white" : "hover:bg-slate-700"}`
          }
        >
          <Home className="h-5 w-5" />
          Dashboard
        </NavLink>
        <NavLink
          to="/dashboard/add-product"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition
            ${isActive ? "bg-blue-600 text-white" : "hover:bg-slate-700"}`
          }
        >
          <Home className="h-5 w-5" />
          Add Product
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition
            ${isActive ? "bg-blue-600 text-white" : "hover:bg-slate-700"}`
          }
        >
          <Users className="h-5 w-5" />
          Users
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition
            ${isActive ? "bg-blue-600 text-white" : "hover:bg-slate-700"}`
          }
        >
          <Settings className="h-5 w-5" />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Aside;
