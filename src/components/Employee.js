import React from 'react';
import { Link } from 'react-router-dom';
import '../style/employee.css';

const detailLine = (item, info) => {
    if (!info[item]) return null;
    let itemTitle = item.charAt(0).toUpperCase() + item.slice(1);
    return <li key={item} className={item}>{itemTitle}: {info[item]}</li>
};

const Employee = ({info, includeDetails}) => {
  const { id, avatar, lastName, firstName } = info;
  const details = [
    detailLine('phone', info),
    detailLine('email', info),
    detailLine('city', info.address)
  ];

  if (includeDetails) {
    if (info.dob) {
      details.push(<li key={info.dob}>Date of Birth: {info.dob}</li>);
    }
    if (info.tags.length) {
      details.push(<li key='tags'>Tags: {info.tags.join(', ')}</li>);
    }
  }

  return (
    <div>
      <Link to={`/${id}`}>
        <img alt={[lastName, firstName].join(', ')} className="avatar" src={avatar} />
      </Link>
      <ul className="userDetails">
        <li className="name">
          <Link to={`/${id}`}>
            {lastName}, {firstName}
          </Link>
        </li>
        {details}
      </ul>
    </div>
  );
};

Employee.propTypes = {

};

export default Employee;
