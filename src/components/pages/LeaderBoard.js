import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/Header';
import styles from './leaderBoard.css';
import Scores from '../leader/Scores';
import { setTopScores } from '../../actions/horseActions';
import { getTopScores, getNewGame } from '../../selectors/horseSelectors';

const LeaderBoard = () => {
  const dispatch = useDispatch();
  const newGame = useSelector(getNewGame);
  const scores = useSelector(getTopScores);

  useEffect(() => {
    if(!scores) dispatch(setTopScores());
  });
  
  const name = newGame ? newGame.name : '';
  const score = newGame ? newGame.score : '';
  
  return (
    <div className={styles.LeaderBoard}>
      <Header/>
      {scores && <section>
        {scores && <Scores scores={scores} codeName={name} newScore={score} />}
      </section>}
    </div>
  );
};

export default LeaderBoard;
