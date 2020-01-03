export const success = (state, action, key) => ({ ...state, [key]: action.payload, loading: false });
export const pending = (state) => ({ ...state, loading: true });
export const error = (state, action) => ({ ...state, loading: false, error: action.payload });

