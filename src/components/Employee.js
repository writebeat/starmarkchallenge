import React from 'react';
import { Link } from 'react-router-dom';
import '../style/employee.css';

const formatPhone = (phone) => {
  let phoneSplit = phone.toLowerCase().split('x');
  let extension = (phoneSplit.length > 1) ? ' x' + phoneSplit[1] : '';
  let phoneDigits = ("" + phoneSplit[0]).replace(/\D/g, '').slice(-10);
  let phoneReplace = phoneDigits.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  let phoneFormatted = phoneReplace + extension;

  return phoneFormatted;
}

const formatDate = (date) => {
  console.log(date);
  let newDate = new Date(date);
  let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
  let day = ("0" + (newDate.getDate())).slice(-2);
  let year = newDate.getFullYear();
  return `${month} ${day}, ${year}`;
  // console.log('year', newDate.getFullYear());
}

const detailLine = (item, info) => {
    if (!info[item]) return null;
    let itemTitle = item.charAt(0).toUpperCase() + item.slice(1);
    if (item.toLowerCase() === 'phone') {
      return <li key={item} className={item}>{itemTitle}: {formatPhone(info[item])}</li>
    }
    return <li key={item} className={item}>{itemTitle}: {info[item]}</li>
};

const Employee = ({info, includeDetails}) => {
  const { id, avatar, lastName, firstName } = info;
  const details = [
    detailLine('phone', info),
    detailLine('email', info),
    detailLine('city', info.address)
  ];

  let image = (
    <Link to={`/${id}`}>
      <img alt={[lastName, firstName].join(', ')} className="avatar" src={avatar} />
    </Link>
  );

  let name = (
    <li className="name">
      <Link className="nameLink" to={`/${id}`}>
        {lastName}, {firstName}
      </Link>
    </li>
  );

  if (includeDetails) {
    image = <img alt={[lastName, firstName].join(', ')} className="avatar" src={avatar} />;
    name = <li className="name">{lastName}, {firstName}</li>
    if (info.dob) {
      details.push(<li key={info.dob}>Date of Birth: {formatDate(info.dob)}</li>);
    }
    if (info.tags.length) {
      let tags = Array.from(new Set(info.tags)).sort();
      details.push(<li key='tags'>Tags: {tags.join(', ')}</li>);
    }
  }

  return (
    <div className="employee">
      {image}
      <ul className="userDetails">
        {name}
        {details}
      </ul>
    </div>
  );
};

Employee.propTypes = {

};

export default Employee;
