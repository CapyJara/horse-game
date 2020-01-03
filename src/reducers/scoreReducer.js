import { success, pending, error } from './reducerHelpers';

const initialState = {
  newGame: null,
  err: {},
  loading: false
};

const horseActions = {
  NEW_GAME: (state, action) => success(state, action, 'newGame'),
  NEW_GAME_PENDING: (state) => pending(state),
  NEW_GAME_ERROR: (state, action) => error(state, action)
};

export default function reducer(state = initialState, action) {
  const transformer = horseActions[action.type] || (() => state);
  return transformer(state, action);
}

