import React, { Component } from 'react';

import classes from './App.css';
import Person from '../components/Persons/Person/Person'

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
    let persons = null;
    let btnClasses = null;

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

        btnClasses = classes.Red;
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hello World</h1> 
        <p className={assignedClasses.join(' ')} > This is working </p>
        <button 
          className={btnClasses}
          onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
        {persons}
      </div>
    );
  }
}

export default App;
