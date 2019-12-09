import React from 'react';
import PropTypes from 'prop-types';
import Score from './Score';
import styles from './scores.css';

const Scores = ({ scores, codeName, newScore }) => {
  const scoreList = scores.map(({ name, score }, i) => {
    let newGame = '';
    if(codeName === name && newScore == score) newGame = styles.NewGame;

    return (
      <li key={`${name}-${score}`} className={newGame}>
        <Score name={name} score={score} rank={i}/>
      </li>
    );
  });
  return (
    <div className={styles.Scores}>
      <header>
        <h3>Rank</h3>
        <h3>Code Name</h3>
        <h3> Score</h3>
      </header>
      <ul>
        {scoreList}
      </ul>
    </div>
  );
};

Scores.propTypes = {
  scores: PropTypes.array.isRequired,
  codeName: PropTypes.string.isRequired,
  newScore: PropTypes.string.isRequired
};

export default Scores;
