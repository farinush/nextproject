import { SET_ERROR, SET_TAGHVIM, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  taghvim: {},
  error: "",
};
const ReducerTaghvim = (state = initialstate, action) => {
  switch (action.type) {
    case SET_TAGHVIM: {
      return { ...state, taghvim: action.payload };
    }
    case SET_LOADING: {
      return { ...state, loading: action.payload };
    }
    case SET_ERROR: {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default ReducerTaghvim;