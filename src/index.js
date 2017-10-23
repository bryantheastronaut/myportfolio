import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {About} from './components/About';
import {Design} from './components/Design';
import {Development} from './components/Development';
import AppContainer from './containers/AppContainer';
import WritingContainer from './containers/WritingContainer';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRoute component={About} />
      <Route path='/design' component={Design} />
      <Route path='/dev' component={Development} />
      <Route path='/writing' component={WritingContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
