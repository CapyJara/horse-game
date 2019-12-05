import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.css';

const Header = ({ lines }) => {
  return (
    <header className={styles.Header}>
      <section>
        <div className={styles['burger-icon']}></div>
        <div className={styles['burger-icon']}></div>
        <div className={styles['burger-icon']}></div>
      </section>
      <section>
        <h1>How Low Can You Scroll</h1>
      </section>
      <section>
        <span>
          <h2>{lines}</h2>
          <h3>LINES</h3>
        </span>
      </section>
    </header>
  );
};

Header.propTypes = {
  lines: PropTypes.number.isRequired
};

export default Header;
