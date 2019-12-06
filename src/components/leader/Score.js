import React from 'react';
import PropTypes from 'prop-types';
import styles from './score.css';

const Score = ({ name, score, rank }) => {
  return (
    <div className={styles.Score}>
      <p>{typeof rank === 'number' ? rank + 1 : rank} </p>
      <p>{name}</p>
      <p>{score}</p>
    </div>
  );
};

Score.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  rank: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default Score;
