import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import styles from './leaderBoard.css';
import Scores from '../leader/Scores';
import { getTopScores } from '../../services/horseApi';

const LeaderBoard = ({ match }) => {
  const [scores, setScores] = useState(null);
  const [num] = useState(match.params.num);

  useEffect(async() => {
    const scoreList = await getTopScores(match.params.num);
    await setScores(scoreList);
  }, [num]);

  return (
    <div className={styles.LeaderBoard}>
      <Header/>
      <section>
        <h1>Top {num} Scores All Time</h1>
        {scores && <Scores scores={scores} />}
      </section>
    </div>
  );
};

LeaderBoard.propTypes = {
  match: PropTypes.object.isRequired
};

export default LeaderBoard;
