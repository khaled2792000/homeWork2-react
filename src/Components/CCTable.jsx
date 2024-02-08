import React, { Component } from "react";

export default class CCTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "100%",
    };
    this.changeSize = this.changeSize.bind(this);
  }
  changeSize(e) {
    if (e.detail === 2) {
      this.setState({ width: "100%" });
    } else {
      this.setState({ width: "50%" });
    }
  }
  render() {
    return (
      <section>
        <p>Question 3</p>
        <table
          onClick={this.changeSize}
          style={{
            width: this.state.width,
          }}
        >
          <thead>
            <tr>
              <th>Col 1</th>
              <th>Col 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>val 1</td>
              <td>val 2</td>
              <td>val 3</td>
            </tr>
            <tr>
              <td>val 4</td>
              <td>val 5</td>
              <td>val 6</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}
