import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './Burger.css';

const Burger = () => {
  const [isOpen, setOpen] = useState(false);
  const open = () =>setOpen(true);
  const close = () =>setOpen(false);
  const toggleMenu = () => isOpen ? close() : open();

  return (
    <div className={styles.Burger}>
      <section className={styles.Icon} onClick={toggleMenu}>
        <div className={styles['Burger-Slice']}></div>
        <div className={styles['Burger-Slice']}></div>
        <div className={styles['Burger-Slice']}></div>
      </section>

      <div className={isOpen ? styles.Menu : styles.Close}>
        <p onClick={close}>X</p>
        <Link onClick={close} id="home-burger" to="/leader/100">Leader Board</Link>
        <Link onClick={close} id="about-me-burger" to="/stats">Game Stats</Link>
      </div>

    </div>
  );
};

Burger.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Burger);
