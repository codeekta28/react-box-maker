import React, { Component } from "react";
import BoxForm from "./BoxForm";
import { v4 as uuidv4 } from "uuid";

export class BoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxAttributes: [],
    };
    this.addBox = this.addBox.bind(this);
  }
  addBox(boxValue) {
    let newValue = { ...boxValue, id: uuidv4() };
    this.setState((prevState) => {
      return {
        boxAttributes: [...prevState.boxAttributes, newValue],
      };
    });
  }
  showBox() {
    return this.state.boxAttributes.map((val) => {
      return (
        <div className="boxContainer-box" key={uuidv4()}>
          <div
            className="box"
            style={{
              height: `${val.height}px`,
              width: `${val.width}px`,
              backgroundColor: `${val.color}`,
            }}
          ></div>
          <button onClick={() => this.remove(val)}>Remove Box!</button>
        </div>
      );
    });
  }
  remove(item) {
    let newBoxAttribute = this.state.boxAttributes.filter(
      (Val) => Val !== item
    );
    this.setState({
      boxAttributes: newBoxAttribute,
    });
  }
  render() {
    return (
      <div className="BoxContainer">
        <BoxForm addBox={this.addBox} />
        {this.showBox()}
      </div>
    );
  }
}

export default BoxContainer;
