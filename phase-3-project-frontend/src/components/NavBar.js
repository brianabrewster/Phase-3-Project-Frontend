import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/dogs">Dogs</NavLink>
      <NavLink to="/walkers">Walkers</NavLink>
      <NavLink to="/application">Application</NavLink>
      <NavLink to="/appointments">Appointments</NavLink>
    </nav>
  );
}

export default NavBar;
