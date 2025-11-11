import { SET_ERROR, SET_HEADER, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  header: {},
  error: "",
};
const ReducerHeader = (state = initialstate, action) => {
  switch (action.type) {
    case SET_HEADER: {
      return { ...state, header: action.payload };
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
export default ReducerHeader;