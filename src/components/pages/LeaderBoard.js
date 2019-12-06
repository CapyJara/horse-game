import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import styles from './leaderBoard.css';
import Scores from '../leader/Scores';
import { getTopScores } from '../../services/horseApi';

const LeaderBoard = ({ match }) => {
  const [scores, setScores] = useState(null);
  const [num] = useState(match.params.num);

  useEffect(() => {
    getTopScores(match.params.num)
      .then(res => {
        setScores(res);
      });
  }, [num]);

  return (
    <div className={styles.LeaderBoard}>
      <Header/>
      <section>
        <h1>Top {num} Scores All Time</h1>
        {scores && <Scores scores={scores} codeName={match.params.name} newScore={match.params.score} />}
      </section>
    </div>
  );
};

LeaderBoard.propTypes = {
  match: PropTypes.object.isRequired
};

export default LeaderBoard;
