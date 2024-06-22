import React from "react";
import NavLinks from "../Components/NavLinks";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm shadow-lg justify-content-center"
      id="navBar"
    >
      <div className="container-fluid">
        <NavLinks />
      </div>
    </nav>
  );
};

export default NavBar;
