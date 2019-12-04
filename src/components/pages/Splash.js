import React from 'react';
import styles from './Splash.css';
import Header from '../header/Header';
import Game from '../game/Game';

const Splash = () => {
  return (
    <section className={styles.Splash}>
      <Header />
      <Game />
    </section>
  );
};

export default Splash;
