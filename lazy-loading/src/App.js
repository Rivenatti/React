import React, { Component, lazy, Suspense } from "react";
import "./App.css";

const MyComponent = lazy(() => import("./components/myComponent"));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Another content</div>
          <Suspense fallback={<div>Loading...</div>}>
            <MyComponent />
          </Suspense>
        </header>
      </div>
    );
  }
}

export default App;
