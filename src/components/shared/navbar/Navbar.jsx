import React from "react";
import { Link, NavLink } from "react-router";
import MyNavLink from "../MyNavLink";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Listed Books", path: "/books" },
    { name: "Pages to Read", path: "/pages-to-read" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <h1 className="text-xl font-bold">Book Vibe</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <MyNavLink to={item.path}>{item.name}</MyNavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <Link
          to={"/signin"}
          className="btn bg-green-500 text-white hover:bg-green-600"
        >
          Sign In
        </Link>
        <Link
          to={"/signup"}
          className="btn bg-blue-500 text-white hover:bg-blue-600"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
