import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import PostListPage from './modules/Post/pages/PostListPage/PostListPage';

const App = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={PostListPage} />
    </Switch>
  )
}

export default withRouter(App);
