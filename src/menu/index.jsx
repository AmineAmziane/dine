import React, { Component } from "react";
import family1 from "./../images/homepage/family-gathering-desktop@2x.jpg";
import family2 from "./../images/homepage/social-events-desktop@2x.jpg";
import family3 from "./../images/homepage/special-events-desktop@2x.jpg";
import lines from "./../images/patterns/pattern-lines.svg";
import { Link } from "react-router-dom";
import "./index.scss";
class Menu extends Component {
  state = {
    list: 0,
  };
  render() {
    return (
      <div className="menu">
        <div className="inner-menu">
          <div className="imgList_a">
            <img src={lines} alt="" className="dvd" />
            <img
              src={
                this.state.list === 0
                  ? family1
                  : this.state.list === 1
                  ? family2
                  : this.state.list === 2
                  ? family3
                  : ""
              }
              alt=""
              className="family"
            />
          </div>
          <div className="right-menu">
            <h1>Family Gathering</h1>
            <p>
              We love catering for entire families. So please bring everyone
              along for a special meal with your loved ones. We'll provide a
              memorable experience for all.
            </p>
            <Link to="/booking">
              <button>BOOK A TABLE</button>
            </Link>
            <ul>
              <li
                onClick={() => this.setState({ list: 0 })}
                className={this.state.list === 0 ? "selectedL" : ""}
              >
                FAMILY GATHERING
              </li>
              <li
                onClick={() => this.setState({ list: 1 })}
                className={this.state.list === 1 ? "selectedL" : ""}
              >
                SPECIAL EVENTS
              </li>
              <li
                onClick={() => this.setState({ list: 2 })}
                className={this.state.list === 2 ? "selectedL" : ""}
              >
                SOCIAL EVENTS
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
