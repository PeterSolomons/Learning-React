import React, { Component } from "react";

//Stateless functional component

class Tail extends Component {
  render() {
    if (this.props.log) console.log("Tail - Rendered");
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <button
            onClick={() => this.props.onEnableLogging()}
            className="btn primary btn-sm"
          >
            {!this.props.log ? "Enable logging" : "Disable logging"};
          </button>
        </a>
      </nav>
    );
  }
}
export default Tail;
