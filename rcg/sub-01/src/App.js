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
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
        );
    }

    return (
      <div className="App">
        <h1>Hello World</h1> 
        <p> This is working </p>
        <button 
          style={buttonStyle}
          // onClick={() => this.switchNameHandler("Maxxxx!")}>Switch Name</button>
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World'))
  }
}

export default App;
