import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
class Bfooter extends Component {
  render() {
    return (
      <div className="bfooter">
        <h1>Ready to make a reservation?</h1>
        <Link to="/booking">
          <button>BOOK A TABLE</button>
        </Link>
      </div>
    );
  }
}
export default Bfooter;
