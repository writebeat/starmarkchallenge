import React from 'react';
import '../style/employee.css';

const detailLine = (item, info) => {
    if (!info[item]) return null;
    let itemTitle = item.charAt(0).toUpperCase() + item.slice(1);
    return <li key={item} className={item}>{itemTitle}: {info[item]}</li>
};

const Employee = ({info}) => {
  const { avatar, lastName, firstName } = info;
  const details = [
    detailLine('phone', info),
    detailLine('email', info),
    detailLine('city', info.address)
  ];

  return (
    <div>
      <img alt={[lastName, firstName].join(', ')} className="avatar" src={avatar} />
      <ul className="userDetails">
        <li className="name">{lastName}, {firstName}</li>
        {details}
      </ul>
    </div>
  );
};

Employee.propTypes = {

};

export default Employee;
