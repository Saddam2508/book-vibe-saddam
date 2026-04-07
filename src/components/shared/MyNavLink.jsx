import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-green-500 border-2 border-green-500 px-4 py-2 rounded-lg font-bold"
            : "px-4 py-2 "
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyNavLink;
