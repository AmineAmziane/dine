import React, { Component } from "react";
import logo from "./../images/logo.svg";
import { Link } from "react-router-dom";
import "./index.scss";
class Booking extends Component {
  state = {
    n: null,
    e: null,
    pd: null,
    pt: null,
    name: "",
    email: "",
    pickadate1: "",
    pickadate2: "",
    pickadate3: "",
    pickatime1: "",
    pickatime2: "",
    people: 1,
  };
  incr = () => {
    let incr = this.state.people;
    incr++;
    this.setState({ people: incr });
  };
  decr = () => {
    let decr = this.state.people;
    if (decr > 1) decr--;
    this.setState({ people: decr });
  };
  getName = (e) => {
    let a = e.target.value;
    this.setState({ name: a });
  };
  getEmail = (e) => {
    let a = e.target.value;
    this.setState({ email: a });
  };
  getPD1 = (e) => {
    let a = e.target.value;
    this.setState({ pickadate1: a });
  };
  getPD2 = (e) => {
    let a = e.target.value;
    this.setState({ pickadate2: a });
  };
  getPD3 = (e) => {
    let a = e.target.value;
    this.setState({ pickadate3: a });
  };
  getPT1 = (e) => {
    let a = e.target.value;
    this.setState({ pickatime1: a });
  };
  getPT2 = (e) => {
    let a = e.target.value;
    this.setState({ pickatime2: a });
  };
  submit = () => {
    let b, c, d, t;
    if (this.state.name.length > 2) b = true;
    else b = false;
    if (/\S+@\S+\.\S+/.test(this.state.email)) c = true;
    else c = false;
    if (
      this.state.pickadate1.length !== 0 &&
      this.state.pickadate2.length !== 0 &&
      this.state.pickadate3.length !== 3
    )
      d = true;
    else d = false;
    if (
      this.state.pickatime1.length !== 0 &&
      this.state.pickatime2.length !== 0
    )
      t = true;
    else t = false;
    this.setState({ n: b, e: c, pd: d, pt: t });
  };
  render() {
    return (
      <div className="App">
        <main>
          <div className="bookingheader">
            <div className="i-bk">
              <Link to="/" style={{ display: "flex" }}>
                <img src={logo} alt="" />
              </Link>
              <h1>Reservations</h1>
              <p>
                We can’t wait to host you. If you have any special requirements
                please feel free to call on the phone number below. We’ll be
                happy to accommodate you.
              </p>
            </div>
            <div className="reserve">
              <input type="text" placeholder="Name" onChange={this.getName} />
              <span className={this.state.n === false ? "show" : "hide"}>
                This field is required
              </span>
              <input
                type="email"
                placeholder="Email"
                onChange={this.getEmail}
                required
              />
              <span className={this.state.e === false ? "show" : "hide"}>
                This field is required
              </span>
              <div className="p-dt">
                <p>Pick a date</p>
                <div>
                  <input
                    type="text"
                    maxLength="2"
                    placeholder="MM"
                    onChange={this.getPD1}
                  />
                  <input
                    type="text"
                    placeholder="DD"
                    onChange={this.getPD2}
                    maxLength="2"
                  />
                  <input
                    type="text"
                    placeholder="YYYY"
                    onChange={this.getPD3}
                    maxLength="4"
                  />
                </div>
              </div>
              <span className={this.state.pd === false ? "show" : "hide"}>
                This field is incomplete
              </span>
              <div className="p-tm">
                <p>Pick a time</p>
                <div>
                  <input
                    type="text"
                    placeholder="09"
                    onChange={this.getPT1}
                    maxLength="2"
                  />
                  <input
                    type="text"
                    placeholder="00"
                    onChange={this.getPT2}
                    maxLength="2"
                  />
                  <select onChange={this.getPD3}>
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>
              <span className={this.state.pt === false ? "show" : "hide"}>
                This field is incomplete
              </span>
              <div className="pp">
                <h2 onClick={this.decr}>-</h2>
                <h3>{this.state.people} people</h3>
                <h2 onClick={this.incr}>+</h2>
              </div>
              <button className="rsv" onClick={this.submit}>
                MAKE RESERVATION
              </button>
            </div>
          </div>
          <div className="bg-book"></div>
        </main>
      </div>
    );
  }
}
export default Booking;
