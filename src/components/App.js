import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Splash from '../components/pages/Splash';
import LeaderBoard from './pages/LeaderBoard';

export default function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/leader/:num" component={LeaderBoard} />
      </Switch>
    </Router>
  );
}
