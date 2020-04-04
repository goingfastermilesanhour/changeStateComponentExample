import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // cloning the array, we get a new array of counters exactly the same.
    const index = counters.indexOf(counter); // get index of counters ...
    counters[index] = { ...counter }; // duplicate de element of the counters(0 or 1 or 2)
    counters[index].value++; // and increment the duplicated element
    this.setState({ counters }); //set state -> show
  };

  handleReset = () => {
    //get the counters, map through it set value to 0, return, set state to the new counters... => reseted.
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  // a counter component, will raise the event (delete) and its parent (COUNTERS), will handle the event.
  // we want to pass a reference to this function, using props to our child component ( counter component ). We call that prop based on the name
  // of our event that is onDelete (=> this.handleDelete). Then we go to the Counter component and modify the onClick expression, we reference this.props.onDelete.
  handleDelete = (counterId) => {
    // we create the new array and call the setState method of the component and let react update the state (make the counter disapper after click)
    const counters = this.state.counters.filter((c) => c.id !== counterId); // we use filter to go through the counters
    // and select all counters except the one with the counterId ( which we clicked on)
    this.setState({ counters: counters });
    console.log("event handler called", counterId);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.length ||
            this.state.counters.filter((c) => c.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
