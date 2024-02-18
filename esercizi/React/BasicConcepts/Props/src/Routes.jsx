
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import GithubUserList from './GithubUserList';
import ShowGithubUser from './ShowGithubUser'; 

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Welcome name="Your Name" />} />
        <Route path="/counter" component={Counter} />
        <Route path="/users/:username" component={ShowGithubUser} />
        <Route path="/users" component={GithubUserList} />
        <Route path="/users" render={() => <div>Add a user and select it</div>} />
      </Switch>
    </div>
  );
};

export default Routes;
