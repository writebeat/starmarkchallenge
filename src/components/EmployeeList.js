import React from 'react';
import Employee from './Employee';

import '../style/employeeList.css';

const EmployeeList = ({employees}) => {
  let output = [];
  let currentLetter = '';
  for (let employee of employees) {
    let employeeInitial = employee.lastName.charAt(0).toUpperCase();
    if (employeeInitial !== currentLetter) {
      currentLetter = employeeInitial;
      output.push(<h3 className="letterIndex" key={currentLetter}>{currentLetter}</h3>);
    }
    output.push(<Employee key={employee.id} info={employee} />);
  }
  return output;
};

Employee.propTypes = {

};

export default EmployeeList;
