import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import styles from './leaderBoard.css';
import Scores from '../leader/Scores';
import { setTopScores } from '../../actions/horseActions';
import { getTopScores } from '../../selectors/horseSelectors';
let didFetch = false;

const LeaderBoard = ({ match }) => {
  const dispatch = useDispatch();
  const scores = useSelector(getTopScores);
  const [num] = useState(match.params.num);

  useEffect(() => {
    if(!didFetch) dispatch(setTopScores());
    didFetch = true;
  });

  return (
    <div className={styles.LeaderBoard}>
      <Header/>
      {scores && <section>
        <h1>Top {num} Scores All Time</h1>
        {scores && <Scores scores={scores} codeName={match.params.name} newScore={match.params.score} />}
      </section>}
    </div>
  );
};

LeaderBoard.propTypes = {
  match: PropTypes.object.isRequired
};

export default LeaderBoard;
