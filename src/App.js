import React, { Component } from "react";
import NavBar from "./components/navbar";
import Tail from "./components/tail";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  request = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    log: false
  };

  constructor() {
    super();
    this.state = this.request;
    if (this.state.log) console.log("App - Constructor");
  }

  componentDidMount() {
    //Ajax call
    if (this.state.log) console.log("App - Mounted");
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    this.setState({ counters });
  };

  handleReset = () => {
    let { log } = { ...this.state };
    this.request.log = log;
    this.setState(this.request);
  };

  handleResetSingle = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    const initialVal = { ...this.request.counters[index] };
    counters[index] = initialVal;
    this.setState({ counters });
  };

  totalItems = () => {
    const { counters } = this.state;
    let total = 0;
    for (let i = 0; i < counters.length; i++) {
      total += counters[i].value;
    }
    return total;
  };

  handleEnableLogging = () => {
    this.setState({ log: !this.state.log });
  };

  render() {
    if (this.state.log) console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalItems={this.totalItems()}
          log={this.state.log}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onResetSingle={this.handleResetSingle}
            log={this.state.log}
          />
        </main>
        <Tail log={this.state.log} onEnableLogging={this.handleEnableLogging} />
      </React.Fragment>
    );
  }
}

export default App;
