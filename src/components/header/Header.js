import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './header.css';
import { achievement } from '../../../assets/badges';

const Header = ({ lines, history }) => {
  const header = lines >= 0 ? 'How Long Can You Scroll?' : 'Play Again';
  const [badge, setBadge] = useState(achievement(lines));
  const [levelUp, setLevelUp] = useState('');

  const page = history.location.pathname.includes('leader') ? 'leader' : 'game';
  console.log(page);

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

      {page === 'game' &&
      <section> 
        <span>
          <h2>{lines}</h2>
          <h3>LINES</h3>
        </span>
      </section>}

      {page === 'leader' && 
      <section className={styles['Burger-icon']}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>}
    </div>
  );
};

Header.propTypes = {
  lines: PropTypes.number,
  history: PropTypes.object.isRequired
};

export default withRouter(Header);
