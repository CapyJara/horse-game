import { success, pending, error } from './reducerHelpers';

const initialState = {
  topHundred: [],
  err: {},
  loading: false
};

const leadersActions = {
  GET_LEADERS: (state, action) => success(state, action, 'topHundred'),
  GET_LEADERS_PENDING: (state) => pending(state),
  GET_LEADERS_ERROR: (state, action) => error(state, action),
};

export default function reducer(state = initialState, action) {
  const transformer = leadersActions[action.type] || (() => state);
  return transformer(state, action);
}

