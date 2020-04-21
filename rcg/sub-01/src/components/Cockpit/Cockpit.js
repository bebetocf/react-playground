import React, { useEffect, useRef } from "react";

import classes from "./Cockpit.css";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    // setTimeout(() => {
    // alert("Saved data to cloud!");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];
  let btnClasses = null;

  if (props.showPersons) {
    btnClasses = classes.Red;
  }

  if (props.personLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}> This is working </p>
      <button ref={toggleBtnRef} className={btnClasses} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
