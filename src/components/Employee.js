import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDate, detailLine } from './Functions';
import '../style/employee.css';

/**
 * Employee component renders employee data, including the avatar and
 * employee information, with the avatar and name being clickable, leading
 * to the Employee Details page. If the includeDetails flag is passed as true,
 * then it also includes the Date of Birth and Tags fields, and removes the
 * linking funcionality from the avatar and name.
 *
 * This component is used both in the Employee Directory page, as well as
 * the Employee Details page.
 * @param {Object} info             Object containing all the employee data.
 * @param {Boolean} includeDetails  Whether or not to include additional
 *                                  details (DOB and Tags).
 */
const Employee = ({info, includeDetails}) => {
  // Define the data from 'info' that we will use, regardless if
  // 'includeDetails' is true or false.
  const { id, avatar, lastName, firstName } = info;

  // Begin constructing the list items that we know we will use.
  const details = [
    detailLine('phone', info),
    detailLine('email', info),
    detailLine('city', info.address)
  ];

  // By default, the avatar will be linked to the employee details page.
  let image = (
    <Link to={`/${id}`}>
      <img
        alt={[lastName, firstName].join(', ')}
        className="avatar"
        src={avatar} />
    </Link>
  );

  // By default, the name will also be linked to the employee details page.
  let name = (
    <li className="name">
      <Link className="nameLink" to={`/${id}`}>
        {lastName}, {firstName}
      </Link>
    </li>
  );

  // Default employee class will just be 'employee'.
  let employeeClass = 'employee';

  // Make changes to the component if the 'includeDetails' flag is activated.
  if (includeDetails === true) {
    // 'image' will just be the avatar, not linked.
    image = <img
      alt={[lastName, firstName].join(', ')}
      className="avatar"
      src={avatar} />;

    // 'name' will just be the name, and not linked.
    name = <li className="name">{lastName}, {firstName}</li>

    // Append " details" to the employee class name to be able to
    // differentiate between the employee component with and without details,
    // and target the CSS accordingly.
    employeeClass += " details";

    // If the date of birth is set, include it in the details.
    if (info.dob) {
      details.push(<li key={info.dob}>Date of Birth: {formatDate(info.dob)}</li>);
    }

    // If there are tags present, remove duplicates, and also include them
    // in the details array of list items.
    if (info.tags.length) {
      let tags = Array.from(new Set(info.tags)).sort();
      details.push(<li key="tags">Tags: {tags.join(', ')}</li>);
    }
  }

  // Return the built component.
  return (
    <div className={employeeClass}>
      {image}
      <ul className="userDetails">
        {name}
        {details}
      </ul>
    </div>
  );
};

// Declare default properties.
Employee.defaultProps = {
  includeDetails: false
};

// Declare the types of properties expected.
Employee.propTypes = {
  // prop "info" requires a data object to be passed to it, containing the
  // employee information.
  info: PropTypes.object.isRequired,
  // prop "includeDetails" is a boolean value, set to 'false' by default,
  // which enables or disables the additional detail fields to be included,
  // as well as the linking of the avatar and name to the detail page.
  includeDetails: PropTypes.bool
};

export default Employee;
