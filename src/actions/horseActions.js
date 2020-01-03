import { createAction } from 'promise-middleware-redux';
import { postGame, fetchTopScores, fetchStats } from '../services/horseApi';

export const [
  newGame,
  NEW_GAME,
  NEW_GAME_PENDING,
  NEW_GAME_ERROR
] = createAction('NEW_GAME', postGame);

export const [
  getTopScores,
  GET_TOP_SCORES,
  GET_TOP_SCORES_PENDING,
  GET_TOP_SCORES_ERROR
] = createAction('GET_TOP_SCORES', fetchTopScores);

export const [
  getStats,
  GET_STATES,
  GET_STATES_PENDING,
  GET_STATES_ERROR
] = createAction('GET_STATES', fetchStats);
