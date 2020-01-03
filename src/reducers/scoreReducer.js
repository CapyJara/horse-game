import { success, pending, error } from './reducerHelpers';

const initialState = {
  newScore: null,
  err: {},
  loading: false
};

const horseActions = {
  NEW_SCORE: (state, action) => success(state, action, 'newScore'),
  NEW_SCORE_PENDING: (state) => pending(state),
  NEW_SCORE_ERROR: (state, action) => error(state, action)
};

export default function reducer(state = initialState, action) {
  const transformer = horseActions[action.type] || (() => state);
  return transformer(state, action);
}

