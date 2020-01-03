import { success, pending, error, resetNull } from './reducerHelpers';

const initialState = {
  topHundred: null,
  err: {},
  loading: false
};

const leadersActions = {
  SET_TOP_SCORES: (state, action) => success(state, action, 'topHundred'),
  SET_TOP_SCORES_PENDING: (state) => pending(state),
  SET_TOP_SCORES_ERROR: (state, action) => error(state, action),
  RESET: (state) => resetNull(state, 'topHundred')
};

export default function reducer(state = initialState, action) {
  const transformer = leadersActions[action.type] || (() => state);
  return transformer(state, action);
}

