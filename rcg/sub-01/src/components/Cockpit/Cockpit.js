import React from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {
  const assignedClasses = [];
  let btnClasses = null;

  if (props.showPersons) {
    btnClasses = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hello World</h1>
      <p className={assignedClasses.join(' ')}> This is working </p>
      <button className={btnClasses} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
