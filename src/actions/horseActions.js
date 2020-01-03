import { createAction } from 'promise-middleware-redux';
import { postGame, fetchTopScores, fetchStats } from '../services/horseApi';

export const [
  postNewGame,
  POST_NEW_GAME,
  POST_NEW_GAME_PENDING,
  POST_NEW_GAME_ERROR
] = createAction('POST_NEW_GAME', postGame);

export const [
  setTopScores,
  SET_TOP_SCORES,
  SET_TOP_SCORES_PENDING,
  SET_TOP_SCORES_ERROR
] = createAction('SET_TOP_SCORES', fetchTopScores);

export const [
  setStats,
  SET_STATES,
  SET_STATES_PENDING,
  SET_STATES_ERROR
] = createAction('SET_STATES', fetchStats);
