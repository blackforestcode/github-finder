import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// State
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

// Layout
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';

// Users
import Users from './components/users/Users';
import Search from './components/users/Search';
import User from './components/users/User';

// Pages
import About from './components/pages/About';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path="/user/:login" component={User} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
