import React from 'react';
import PropTypes from 'prop-types';
import '../style/cities.css';

/**
 * Cities component displays a dropdown list containing all the city names
 * passed to it, and triggers a function call to 'changeCity' when the value
 * is changed.
 * @param {Array} cities          Array containing list of cities to choose from.
 * @param {Function} changeCity   Function to be called upon changing the value
 *                                of the dropdown.
 */
const Cities = ({cities, changeCity}) => {
  return (
    <select id="filter" onChange={changeCity}>
      <option value=''>Filter by city name</option>
      {cities.map((city, index) => (
        <option key={index} value={city}>{city}</option>
      ))}
    </select>
  );
}

// Declare the types of properties expected.
Cities.propTypes = {
  // prop "cities" requires an array to be passed to it.
  cities: PropTypes.array.isRequired,
  // prop "changeCity" requires a function that will be called
  // upon changing the select box value.
  changeCity: PropTypes.func.isRequired
};

export default Cities;
