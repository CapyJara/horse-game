import React, { useState } from 'react';
import styles from './Splash.css';
import Header from '../header/Header';
import Game from '../game/Game';

const Splash = () => {
  const [lines, setLines] = useState(0);

  return (
    <section className={styles.Splash}>
      <Header lines={lines}/>
      <Game lines={lines} setLines={setLines}/>
    </section>
  );
};

export default Splash;
