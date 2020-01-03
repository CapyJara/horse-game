import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Splash from '../components/pages/Splash';
import LeaderBoard from './pages/LeaderBoard';
import styles from './app.css';

export default function App() {
  return (
    <section className={styles.Main}>
      <Router >
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route path="/leader" component={LeaderBoard} />
          <Route path="/stats" component={LeaderBoard} />
        </Switch>
      </Router>
    </section>
  );
}
