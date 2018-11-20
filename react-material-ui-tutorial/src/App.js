import React, { Component } from "react";
import "./App.css";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Exercises from "./Components/Exercises/exercises";
import { muscles, exercises } from "./store";

class App extends Component {
  state = {
    exercises
  };

  getExercisesByMuscles = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  };

  render() {
    const exercises = this.getExercisesByMuscles();
    return (
      <>
        <Header />
        <Exercises exercises={exercises} />
        <Footer muscles={muscles} />
      </>
    );
  }
}

export default App;
