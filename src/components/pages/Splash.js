import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Splash.css';
import Header from '../header/Header';
import Game from '../game/Game';

const Splash = ({ history }) => {
  const [lines, setLines] = useState(0);

  return (
    <section className={styles.Splash}>
      <Header lines={lines}/>
      <Game lines={lines} setLines={setLines} history={history}/>
    </section>
  );
};

Splash.propTypes = {
  history: PropTypes.object.isRequired
};

export default Splash;
