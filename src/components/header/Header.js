import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './header.css';
import { achievement } from '../../../assets/badges';
import Burger from '../burger/Burger';
import { reset } from '../../actions/horseActions';

const Header = ({ lines, history }) => {
  const dispatch = useDispatch();
  const page = history.location.pathname.slice(1);
  console.log(page);
  
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
        <Link to="/" onClick={() => dispatch(reset())}>{header}</Link>
      </header>

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
