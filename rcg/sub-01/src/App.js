import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max', age: 28
      },
      {
        name: 'Bob', age: 23
      }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('click');
    this.setState({
      persons: [
        {
          name: newName, age: 28
        },
        {
          name: 'Bob', age: 18
        }
      ]
    })
  }

  changeNameHandler = (event) => {
    // console.log('click');
    this.setState({
      persons: [
        {
          name: 'Max', age: 28
        },
        {
          name: event.target.value, age: 23
        }
      ]
    })
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello World</h1> 
        <p> This is working </p>
        <button 
          style={buttonStyle}
          onClick={() => this.switchNameHandler("Maxxxx!")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Xam')}
          changed={this.changeNameHandler}>
            My hobbies: Racing</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World'))
  }
}

export default App;
