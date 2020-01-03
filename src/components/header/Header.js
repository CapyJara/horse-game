import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './header.css';
import { achievement } from '../../../assets/badges';
import Burger from '../burger/Burger';

const Header = ({ lines, history }) => {
  const page = history.location.pathname.slice(1);
  const headerOptions = {
    '': 'How Long Can You Scroll?',
    leader: 'Top 100 Scores',
    stats: 'Statistics'
  };
  const header = headerOptions[page];
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

      <header>{header}</header>

      {page === '' &&
      <section> 
        <span>
          <h2>{lines}</h2>
          <h3>LINES</h3>
        </span>
      </section>}

      {(page === 'leader' || page === 'stats') && 
      <Burger/>}
    </div>
  );
};

Header.propTypes = {
  lines: PropTypes.number,
  history: PropTypes.object.isRequired
};

export default withRouter(Header);
