import React, { Component } from "react";
import divide from "./../images/patterns/pattern-divide.svg";
import "./index.scss";
class Part1 extends Component {
  render() {
    return (
      <div className="part1">
        <div className="imgA">{/*<img src={enjoyable_place} alt="" />*/}</div>
        <div className="textA">
          <img src={divide} alt="" />
          <h1>Enjoyable place </h1>
          <h1> for all the family</h1>
          <p>
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </div>
    );
  }
}
export default Part1;
