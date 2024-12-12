import React from'react';
import ReactDOM from'react-dom';
import { BrowserRouter, Route, Switch } from'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Roles from './pages/Roles';
import Permissions from './pages/Permissions';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/users" component={Users} />
        <Route path="/roles" component={Roles} />
        <Route path="/permissions" component={Permissions} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));