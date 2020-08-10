import React, { Component } from "react";
import logo from "./../images/logo.svg";
import "./index.scss";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="inner-footer">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <p>MARTHWAI E, SEDBERGH</p>
            <p>CUMBRIA</p>
            <p>+00 44 123 4567</p>
          </div>
          <div>
            <p>OPEN TIMES</p>
            <p>MON - FRI: 09:00 AM - 10:00 PM</p>
            <p>SAT - SUN: 09-00 AM -11:30 PM</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
