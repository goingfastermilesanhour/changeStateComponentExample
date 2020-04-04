import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {/*his is gonna be the wrapper for all the components */}
        {/* we get each counter and map it to a Counters component. */}
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            // value={counter.value}
            // selected={true}
            // instead of adding props like here, of the same object... id, selected, etc. we could simply add the object counter with
            // its properties and funct. like here: counter = {counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
