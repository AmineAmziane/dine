import React, { Component } from "react";
import Navbar from "./../navbar/";
import Part1 from "./../part1/";
import Part2 from "./../part2/";
import List from "./../list/";
import Menu from "./../menu/";
import Bfooter from "./../bfooter/";
class Index extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Part1 />
        <Part2 />
        <List />
        <Menu />
        <Bfooter />
      </div>
    );
  }
}
export default Index;
