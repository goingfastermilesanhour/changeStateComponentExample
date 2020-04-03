import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   value: this.props.value,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: []
  // };
  // !!
  // we don't use state properties anymore. w rely on PROPS from now on, to receive a data that this component needs.
  // (controlled component it receives data VIA PROPS and raises events, when DATA needs to be changed)
  // so this component, counter is entirely controlled by its parent. Counters
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>; //or return null
    return (
      <ul>
        {this.state.tags.length.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  //binding for the handle Increment method to have access to "THIS" we need constructor but we need first the superclass.
  // constructor() {
  // "we call the constructor of the parent class ( counter in this case ) using the super keyword otherwise this is not allowed before super"
  // super();
  // this BIND method, will return a new instance of the handleIncrement function. In that function this is always referencing the current obj.
  // set this.handleIncrement to the function returned by this.handleIncrement.
  // this.handleIncrement = this.handleIncrement.bind(this);
  // console.log("Constructor", this);
  // }

  // Method used for handle evnet example:
  handleButton() {
    console.log("Button Clicked", this);
    // if this is called as part of a method in an object, THIS would return a reference to the object ALWAYS
    // if the function is called standalone, THIS would return a reference to the window object, but in STRICT mode, it returns undefined.
  }
  //rather than calling a super() and have a constructor n every component, you can use arrow function, as they inherit the THIS keyword from.
  // handleIncrement = product => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };
  render() {
    console.log("props", this.props);
    return (
      <div>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
        {/* {this.renderTags()} */}
        {/* <h3>this pic is great</h3> */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* handle events: note that method isn't called insid
        {/* create the delete button to delete a counter. The component that owns a piece of the state, that is COUNTERS not COUNTER
        should be the one modifying it... so the counter component will raise the event, the counters component will handle it.
        we add a method to the counters component, pass a reference to that method via props, with the COUNTER component*/}
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  getBadgeClasses() {
    const classes = `badge m-2 badge-${
      this.props.counter.value === 0 ? "warning" : "primary"
    }`;
    return classes;
    // classes += this.state.count === 0 ? "warning" : "primary"; //checks if it's 0 => yellow ELSE it's blue.
  }

  formatCount() {
    const { value } = this.props.counter; // picking count property of this object and store it in a separate variable so that we only use count in return under
    return value === 0 ? <h1>"Zero"</h1> : value;
  }
}
export default Counter;
