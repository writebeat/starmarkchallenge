import React from 'react';
import '../style/cities.css';

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

Cities.propTypes = {

};

export default Cities;
