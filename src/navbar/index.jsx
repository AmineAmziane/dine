import React, { Component } from "react";
import logo from "./../images/logo.svg";
import { Link } from "react-router-dom";
import "./index.scss";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="inner-navbar">
          <img src={logo} alt="" />
          <div className="header">
            <h1>Exquisite dining since 1989</h1>
            <p>
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
            <Link to="/booking">
              <button>BOOK A TABLE</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
