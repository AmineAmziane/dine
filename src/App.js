import React from "react";
import Footer from "./footer/";
import Index from "./index/";
import Booking from "./booking/";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename="/react">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/booking" component={Booking} />
      </Switch>
      <div className="App">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
