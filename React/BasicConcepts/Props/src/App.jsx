import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';
import Routes from './Routes';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
        
            <li>
              <Link to="/users/octocat">Show Github User</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Routes />
          <Route exact path="/" render={() => <Welcome name="Your Name" />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;




