import { SET_ERROR, SET_TAGHVIM2, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  taghvim2: {},
  error: "",
};
const ReducerTaghvim2 = (state = initialstate, action) => {
  switch (action.type) {
    case SET_TAGHVIM2: {
      return { ...state, taghvim2: action.payload };
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
export default ReducerTaghvim2;