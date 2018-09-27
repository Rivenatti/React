import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.input.value);
  }

  render() {
    const fruits = ["Apple", "Pear", "Banana"];

    return (
      <div className="App">
        {fruits.map(fruit => {
          return <div key={fruit}>{fruit}</div>;
        })}
        <form onSubmit={this.onSubmit}>
          <input ref={input => (this.input = input)} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
