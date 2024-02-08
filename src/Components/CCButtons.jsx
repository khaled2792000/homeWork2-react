import React, { Component } from "react";
export default class CCButtons extends Component {
  constructor(props) {
    super(props);
    this.buttonsColorsList = [
      "white",
      "red",
      "black",
      "blue",
      "green",
      "skyblue",
      "pink",
      "orange",
    ];
    this.state = {
      backgroundColors: "white",
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(e) {
    this.setState({ backgroundColors: e.target.innerText });
  }
  render() {
    return (
      <section>
        <p>Question 1</p>
        <div
          style={{ backgroundColor: this.state.backgroundColors }}
          className="package"
        >
          {this.buttonsColorsList.map((color) => {
            return (
              <button onClick={this.changeColor} key={color}>
                {color}
              </button>
            );
          })}
        </div>
      </section>
    );
  }
}
