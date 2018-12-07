import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onResetSingle,
      log
    } = this.props;
    if (log) console.log("Counters - Rendered");
    return (
      <div>
        <button onClick={onReset} className="btn primary btn-sm m-2">
          Reset all
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onResetSingle={onResetSingle}
            log={log}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
