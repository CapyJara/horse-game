import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './header.css';
import { achievement } from '../../../assets/badges';

const Header = ({ lines }) => {
  const header = lines >= 0 ? 'How Long Can You Scroll?' : 'Play Again';
  const [badge, setBadge] = useState(achievement(lines));
  const [levelUp, setLevelUp] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setLevelUp('');
    }, 2000);
  }, [badge]);
  
  if(badge !== achievement(lines)) {
    setLevelUp('LeveledUp');
    setBadge(achievement(lines));
  }

  return (
    <div className={styles.Header}>
      <section>
        {badge && <div className={styles.Icon}>
          <img src={badge} className={styles[levelUp]}/>  
        </div>}
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
