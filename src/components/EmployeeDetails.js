import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Employee from './Employee';
import '../style/employeeDetails.css';

/**
 * EmployeeDetails class component fetches user data from the API, and
 * renders it on the page. This is the component used for the detail page,
 * when a user is clicked on.
 * @param {Object} match  Object containing the URL parameters passed from
 *                        the router.
 * @extends Component
 */
class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    // Set initial component state.
    this.state = {
      loaded: false,
      employee: {}
    }
  }

  componentWillMount() {
    // Fetch data from REST API endpoint.
    fetch(`http://challenge-dev.starmarkcloud.com/users/${this.props.match.params.id}`)
      .then(data => {
        // After it has loaded, convert that data to JSON.
        return data.json();
      })
      .then(jsonData => {
        // Set the component state with the new, updated data retrieved from
        // the API, and set the 'loaded' flag to true.
        this.setState({
          employee: jsonData,
          loaded: true
        });

      });
  }

  render() {
    // If the data has not yet loaded, let the user know it is still being loaded.
    if (this.state.loaded === false) return <span>Loading...</span>;

    // Once it has loaded, display the Employee details.
    return (
        <main>
          <div className="backLinkWrapper">
            <Link to="/" className="backLink"><span>&#8592; Back to list</span></Link>
          </div>
          <Employee info={this.state.employee} includeDetails={true}/>
        </main>
    )
  }

};

// Declare the types of properties expected.
EmployeeDetails.propTypes = {
  // prop "match" is passed from the Router, and it contains the parameters
  // passed from the URL.
  match: PropTypes.object.isRequired
};

export default EmployeeDetails;
