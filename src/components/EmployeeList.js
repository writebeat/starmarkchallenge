import React from 'react';
import PropTypes from 'prop-types';
import Employee from './Employee';

import '../style/employeeList.css';

/**
 * EmployeeList takes a list of employee objects, and displays them, and
 * includes a "letter index" that effectively groups the users by the first
 * letter of their last name.
 * @param {Array} employees Array of objects, employee data.
 */
const EmployeeList = ({employees}) => {
  // Initialize the output as a blank array.
  let output = [];

  // We will use 'currentLetter' to know when the employee is part of a
  // new letter group. Starts off blank so that the very first employee
  // creates the first letter.
  let currentLetter = '';

  // Loop through employees from the data provided.
  for (let employee of employees) {
    let employeeInitial = employee.lastName.charAt(0).toUpperCase();

    // If we are starting a new letter group, add an h3 containing the new
    // letter to the output array.
    if (employeeInitial !== currentLetter) {
      currentLetter = employeeInitial;
      output.push(<h3 className="letterIndex" key={currentLetter}>{currentLetter}</h3>);
    }

    // Add the current employee to the output array, using the
    // Employee component.
    output.push(<Employee key={employee.id} info={employee} />);
  }
  return output;
};

// Declare the types of properties expected.
Employee.propTypes = {
  // prop "employees" is an array containing objects of employee data.
  employees: PropTypes.array.isRequired
};

export default EmployeeList;
