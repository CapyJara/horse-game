import { combineReducers } from 'redux';
import score from './scoreReducer';
import leaders from './leaderReducer';
import stats from './statsReducer';

export default combineReducers({
  score,
  leaders,
  stats 
});
