import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';

import Main from '../layouts/Main';
import Polls from '../pages/Polls';
import CreatePoll from '../pages/CreatePoll';
import UserReg from '../pages/UserReg';

const Routes = () => (
    <Router>
      <Main>
        <Switch>
          <Route exact path="/">
            <Polls />
          </Route>
          <Route exact path="/createpoll" 
          render={ props => <CreatePoll {...props} />}
          /> 
          <Route exact path="/users">
            <UserReg />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Main>
    </Router>
);

export default Routes;