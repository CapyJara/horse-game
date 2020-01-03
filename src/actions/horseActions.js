import { createAction } from 'promise-middleware-redux';
import { postGame, fetchTopScores, fetchStats } from '../services/horseApi';

export const [
  postNewGame,
  POST_NEW_GAME,
  POST_NEW_GAME_PENDING,
  POST_NEW_GAME_ERROR
] = createAction('POST_NEW_GAME', postGame);

export const [
  reset,
  RESET
] = createAction('RESET', () => ({ type: 'RESET' }));

export const [
  setTopScores,
  SET_TOP_SCORES,
  SET_TOP_SCORES_PENDING,
  SET_TOP_SCORES_ERROR
] = createAction('SET_TOP_SCORES', fetchTopScores);

export const [
  setStats,
  SET_STATS,
  SET_STATS_PENDING,
  SET_STATS_ERROR
] = createAction('SET_STATS', fetchStats);
