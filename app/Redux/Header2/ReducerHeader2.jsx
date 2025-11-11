import { SET_ERROR, SET_HEADER2, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  header2: {},
  error: "",
};
const ReducerHeader2 = (state = initialstate, action) => {
  switch (action.type) {
    case SET_HEADER2: {
      return { ...state, header2: action.payload };
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
export default ReducerHeader2;