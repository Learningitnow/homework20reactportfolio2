import React from "react";
import { NavLink } from "react-router-dom";
import Heading from "./Heading";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <NavLink className="navbar-brand" to="/">
        <Heading />
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>


      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">



          
          <li className="nav-item">
            <NavLink className="nav-link" to="/React-Portfolio/Contact">
             Contact
            </NavLink>
          </li>


          <li className="nav-item">
            <NavLink className="nav-link" to="/React-Portfolio/Portfolio">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/React-Portfolio/About">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
