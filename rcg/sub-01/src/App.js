import React, { Component } from 'react';
import './App.css';
import Radium from 'radium'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max', age: 28, id: 'adadcacd'
      },
      {
        name: 'Bob', age: 23, id: 'gebsvsdc'
      },
      {
        name: 'Tony', age: 17, id: 'faffefra'
      }
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
                key={person.id}
                changed={(event => this.changeNameHandler(event, person.id))}
              />
            );
          })}
        </div>
        );
        buttonStyle.backgroundColor = 'red';
        buttonStyle[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }
    }

    const classes = []
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hello World</h1> 
        <p className={classes.join(' ')} > This is working </p>
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

export default Radium(App);
