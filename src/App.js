import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import BoxContainer from "./Component/BoxContainer";

export class App extends Component {
  render() {
    return (
      <div className="App">
        This is a BoxMaker Project
        <BoxContainer />
      </div>
    );
  }
}

export default App;
