import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters]; // cloning the array, we get a new array of counters exactly the same.
    const index = counters.indexOf(counter); // get index of counters ...
    counters[index] = { ...counter }; // duplicate de element of the counters(0 or 1 or 2)
    counters[index].value++; // and increment the duplicated element
    this.setState({ counters }); //set state -> show
  };

  handleReset = () => {
    //get the counters, map through it set value to 0, return, set state to the new counters... => reseted.
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  // a counter component, will raise the event (delete) and its parent (COUNTERS), will handle the event.
  // we want to pass a reference to this function, using props to our child component ( counter component ). We call that prop based on the name
  // of our event that is onDelete (=> this.handleDelete). Then we go to the Counter component and modify the onClick expression, we reference this.props.onDelete.
  handleDelete = counterId => {
    // we create the new array and call the setState method of the component and let react update the state (make the counter disapper after click)
    const counters = this.state.counters.filter(c => c.id !== counterId); // we use filter to go through the counters
    // and select all counters except the one with the counterId ( which we clicked on)
    this.setState({ counters: counters });
    console.log("event handler called", counterId);
  };
  render() {
    return (
      <div>
        {/*his is gonna be the wrapper for all the components */}
        {/* we get each counter and map it to a Counters component. */}
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
            // value={counter.value}
            // selected={true}
            // instead of adding props like here, of the same object... id, selected, etc. we could simply add the object counter with
            // its properties and funct. like here: counter = {counter}
          />
        ))}
        ;
      </div>
    );
  }
}

export default Counters;
