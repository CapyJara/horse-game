import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Score from './Score';
import styles from './scores.css';

const Scores = ({ scores, codeName, newScore }) => {
  const [message, setMessage] = useState('Sorry, you didn\'t make the top 100 :(');

  useEffect(() => {
    const currentScore = document.querySelector(`.${styles.NewGame}`);
    if(currentScore) {
      setMessage('You Made the top 100!!');
      currentScore.scrollIntoView('alignTo');
    }
  }, []);

  const scoreList = scores.map(({ name, score }, i) => {
    let newGame = '';
    if(codeName === name && newScore == score) {
      newGame = styles.NewGame;
    }

    return (
      <li key={`${name}-${score}-${i}`} className={newGame}>
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
      <section>
        <h2>{message}</h2>
      </section>
    </div>
  );
};

Scores.propTypes = {
  scores: PropTypes.array.isRequired,
  codeName: PropTypes.string.isRequired,
  newScore: PropTypes.string.isRequired
};

export default Scores;
