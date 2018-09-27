import React, { Component } from "react";

import NewComponent from "./NewComponent";

class App extends Component {
  showNick = nick => {
    console.log(this.nick);
  };

  render() {
    return (
      <div className="App">
        <NewComponent 
		nickname="John" 
		action={this.showNick} />
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
