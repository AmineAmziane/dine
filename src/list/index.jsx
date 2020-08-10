import React, { Component } from "react";
import divide from "./../images/patterns/pattern-divide.svg";
import beef from "./../images/homepage/beef-desktop-tablet@2x.jpg";
import salmon from "./../images/homepage/chocolate-desktop-tablet@2x.jpg";
import chocolate from "./../images/homepage/salmon-desktop-tablet@2x.jpg";
import "./index.scss";
class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="textA">
          <img src={divide} alt="" />
          <h1>A few highlights</h1>
          <h1> from our menu</h1>
          <p>
            We cater for all dietary requirements, but here's a glimpse at some
            of our diner's favourites. Our menu is revamped every season.
          </p>
        </div>
        <div className="all-list">
          <div className="someeat">
            <img src={chocolate} alt="" className="leftI" />
            <img src={divide} alt="" className="Dlines" />
            <div className="infoeat">
              <h3>Seared Salmon Fillet</h3>
              <p>
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>
          </div>
          <div className="someeat">
            <img src={beef} alt="" className="leftI" />
            <img src={divide} alt="" className="Dlines" />
            <div className="infoeat">
              <h3>Rosemary Filet Mignon</h3>
              <p>
                Our prime beef served to your taste with a delicious choice of
                seasonal sides.
              </p>
            </div>
          </div>
          <div className="someeat">
            <img src={salmon} alt="" className="leftI" />
            <img src={divide} alt="" className="Dlines" />
            <div className="infoeat">
              <h3>Summer Fruit Chocolate Mousse</h3>
              <p>
                Creamy mousse combined with summer fruits and dark chocolate
                shavings.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default List;
