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
    <ul className={styles.Scores}>
      <li>
        <Score name="CodeName" score="Score" rank="Rank" />
      </li>
      {scoreList}
    </ul>
  );
};

Scores.propTypes = {
  scores: PropTypes.array.isRequired,
  codeName: PropTypes.string.isRequired,
  newScore: PropTypes.string.isRequired
};

export default Scores;
