import React from 'react';
import PropTypes from 'prop-types';
import Score from './Score';
import styles from './scores.css';

const Scores = ({ scores }) => {
  const scoreList = scores.map(({ name, score }, i) => {
    return (
      <li key={`${name}-${score}`}>
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
  scores: PropTypes.array.isRequired
};

export default Scores;
