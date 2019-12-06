import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './header.css';

const Header = ({ lines }) => {
  const header = lines >= 0 ? 'How Long Can You Scroll?' : 'Play Again';
  return (
    <div className={styles.Header}>
      <section>
        {/* <div className={styles['burger-icon']}></div>
        <div className={styles['burger-icon']}></div>
        <div className={styles['burger-icon']}></div> */}
      </section>
      <header>
        <Link to="/" >{header}</Link>
      </header>
      <section>
        {lines >= 0 && 
        <span>
          <h2>{lines}</h2>
          <h3>LINES</h3>
        </span>}
      </section>
    </div>
  );
};

Header.propTypes = {
  lines: PropTypes.number
};

export default Header;
