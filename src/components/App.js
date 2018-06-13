import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EmployeeDirectory from './EmployeeDirectory';
import EmployeeDetails from './EmployeeDetails';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={EmployeeDirectory} />
      <Route exact path="/:id" component={EmployeeDetails} />
    </Switch>
  </main>
);

export default App;
