import React, { Component } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from './store.js';

class App extends Component {
  state = {
    exercises,
    category: 'all',
    exercise: null
  }

  getExercisesByMuscles = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        
        exercises[muscles] = exercises[muscles] 
        ? [...exercises[muscles], exercise] 
        : [exercise] 
        
        return exercises;
      }, {})
    );
  }

  handleCategoryPressed = (category) => {
    this.setState({
      category
    })
  }
  
  handleExercisePressed = (exercise) => {
    this.setState({
      exercise  
    })
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise } = this.state;

    return (
      <React.Fragment>
        <Header />
        <Exercises 
          exercises={exercises} 
          category={category}
          exercise={exercise} 
          exercisePressed={this.handleExercisePressed}
        />
        <Footer 
          muscles={muscles}
          category={category}
          categoryPressed={this.handleCategoryPressed}
        />
      </React.Fragment>      
    );
  }
}

export default App;
