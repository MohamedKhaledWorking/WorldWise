import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/product"}>product</NavLink>
          </li>
          <li>
            <NavLink to={"/pricing"}>pricing</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
