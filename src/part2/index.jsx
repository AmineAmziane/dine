import React, { Component } from "react";
import divide from "./../images/patterns/pattern-divide.svg";
import lines from "./../images/patterns/pattern-lines.svg";
import "./index.scss";
class Part2 extends Component {
  render() {
    return (
      <div className="part2">
        <div className="textA">
          <img src={divide} alt="" />
          <h1>The most locally</h1>
          <h1> sourced food</h1>
          <p>
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you're eating the freshest, most sustainable
            food.
          </p>
        </div>
        <div className="imgA">
          <img src={lines} alt="" />
        </div>
      </div>
    );
  }
}
export default Part2;
