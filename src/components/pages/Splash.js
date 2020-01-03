import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Splash.css';
import Header from '../header/Header';
import Game from '../game/Game';
import { useDispatch } from 'react-redux';
import { reset } from '../../actions/horseActions';
let didLand = false;

const Splash = ({ history }) => {
  const [lines, setLines] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log('hi');
    if(!didLand) dispatch(reset());
    didLand = true;
  });

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
