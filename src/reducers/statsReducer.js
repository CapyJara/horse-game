import { success, pending, error } from './reducerHelpers';

const initialState = {
  statistics: null,
  err: {},
  loading: false
};

const statsActions = {
  GET_STATS: (state, action) => success(state, action, 'statistics'),
  GET_STATS_PENDING: (state) => pending(state),
  GET_STATS_ERROR: (state, action) => error(state, action)
};

export default function reducer(state = initialState, action) {
  const transformer = statsActions[action.type] || (() => state);
  return transformer(state, action);
}

