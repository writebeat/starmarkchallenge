import React, { Component } from 'react';
import Cities from './Cities';
import EmployeeList from './EmployeeList';
import { sortLastNames } from './Functions';

import '../style/EmployeeDirectory.css';

/**
 * EmployeeDirectory is the container of the list of employees. It contains
 * most of the logic for the application, including fetching the list of
 * employees from the API, sorting them, and filtering out the duplicate
 * cities. It then passes the data it processes to the simpler components,
 * whose main job is just to display the content.
 * @extends Component
 */
class EmployeeDirectory extends Component {
  constructor() {
    super();
    // Set initial Component State.
    this.state = {
      allEmployees: [],
      employees: [],
      cities: []
    };
    // Bind the changeCity function to 'this' so that it would have access
    // to the Component State.
    this.changeCity = this.changeCity.bind(this);
  }

  componentWillMount() {
    // Fetch the list of all users from the API.
    fetch('http://challenge-dev.starmarkcloud.com/users')
      .then(data => {
        // Convert that data to JSON.
        return data.json();
      })
      .then(jsonData => {
        // Extract the list of cities from the data.
        let allCities = [];
        for (let record of jsonData) {
          allCities.push(record.address.city);
        }
        // Remove any duplicate cities.
        let citiesNoDups = Array.from(new Set(allCities)).sort();
        // Sort the employees by last name.
        let employeesSorted = sortLastNames(jsonData);
        // Update the Component State with our new data.
        this.setState({
          allEmployees: employeesSorted,
          employees: employeesSorted,
          cities: citiesNoDups
        });
      });
  }
  /**
   * changeCity filters the list of employees in the Component State that
   * match the city selected.
   * @param  {Object} event Object created from the onChange event from the
   *                        cities select dropdown.
   */
  changeCity(event) {
    // Extract the new value of the dropdown after it was changed.
    let cityFilter = event.target.value;

    if(cityFilter === '') {
      // User selected no city, so show employees from all cities.
      if (this.state.employees === this.state.allEmployees) return;
      this.setState({ employees: this.state.allEmployees });
    } else {
      // User selected a city, so only show users from that city.
      let employees = [...this.state.allEmployees].filter((employee) => {
        return (employee.address.city.toLowerCase() === cityFilter.toLowerCase());
      });
      this.setState({ employees });
    }
  }

  render() {
    return (
      <main className="employeeDirectory">
        <h1>Widgets Inc.</h1>
        <h2>Employee Directory</h2>
        <Cities cities={this.state.cities} changeCity={this.changeCity} />
        <section className="employeeList">
          <EmployeeList employees={this.state.employees} />
        </section>
      </main>
    );
  }
}

export default EmployeeDirectory;
