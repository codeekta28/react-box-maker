import React, { Component } from "react";

export class BoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: "",
      color: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    const { height, width, color } = this.state;
    e.preventDefault();
    this.props.addBox(this.state);
    this.setState({
      height: "",
      width: "",
      color: "",
    });
    // console.log("box", height, width, color);
  }
  render() {
    return (
      <div className="BoxForm">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="height">Height(px):</label>
            <input
              type="number"
              min={100}
              max={500}
              name="height"
              value={this.state.height}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="width">Width(px):</label>
            <input
              type="number"
              min={100}
              max={600}
              name="width"
              value={this.state.width}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="color">BackgroundColor:</label>
            <input
              type="text"
              name="color"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </div>
          <button>Add Box!</button>
        </form>
      </div>
    );
  }
}

export default BoxForm;
