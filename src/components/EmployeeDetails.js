import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Employee from './Employee';
import '../style/employeeDetails.css';

const detailLine = (item, info) => {
    if (!info[item]) return null;
    let itemTitle = item.charAt(0).toUpperCase() + item.slice(1);
    return <li key={item} className={item}>{itemTitle}: {info[item]}</li>
};

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      employee: {}
    }
  }

  componentWillMount() {
    fetch(`http://challenge-dev.starmarkcloud.com/users/${this.props.match.params.id}`)
      .then(data => {
        return data.json();
      })
      .then(jsonData => {

        this.setState({
          employee: jsonData,
          loaded: true
        });

      });
  }

  render() {
    if (this.state.loaded === false) return <span>Loading...</span>;

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

EmployeeDetails.propTypes = {

};

export default EmployeeDetails;
