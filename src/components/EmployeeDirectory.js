import React, { Component } from 'react';
import Cities from './Cities';
import EmployeeList from './EmployeeList';

import '../style/EmployeeDirectory.css';

const sortLastNames = (jsonData) => {
  jsonData.sort((a, b) => {
    let emp1 = a.lastName.toUpperCase();
    let emp2 = b.lastName.toUpperCase();

    return (emp1 < emp2)
      ? -1
      : (emp1 > emp2)
        ? 1
        : 0;
  });
  return jsonData;
}

class EmployeeDirectory extends Component {
  constructor() {
    super();
    this.state = {
      allEmployees: [],
      employees: [],
      cities: []
    };
    this.changeCity = this.changeCity.bind(this);
  }

  componentWillMount() {
    fetch('http://challenge-dev.starmarkcloud.com/users')
      .then(data => {
        return data.json();
      })
      .then(jsonData => {
        let allCities = [];
        for (let record of jsonData) {
          allCities.push(record.address.city);
        }
        let citiesNoDups = Array.from(new Set(allCities)).sort();
        let employeesSorted = sortLastNames(jsonData);
        this.setState({
          allEmployees: employeesSorted,
          employees: employeesSorted,
          cities: citiesNoDups
        });
      });
  }

  changeCity(event) {
    let cityFilter = event.target.value;
    if(cityFilter === '') {
      if (this.state.employees === this.state.allEmployees) return;
      this.setState({ employees: this.state.allEmployees });
    } else {
      let employees = [...this.state.allEmployees].filter((employee) => {
        return (employee.address.city.toLowerCase() === cityFilter.toLowerCase());
      });
      this.setState({ employees });
    }
  }

  render() {
    return (
      <div className="EmployeeDirectory">
        <h1>Page Title</h1>
        <Cities cities={this.state.cities} changeCity={this.changeCity} />
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}

export default EmployeeDirectory;
