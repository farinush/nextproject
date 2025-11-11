import { SET_ERROR, SET_TOTALPRODUCT, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  totalproduct: [],
  error: "",
};
const ReducerTotalproduct = (state = initialstate, action) => {
  switch (action.type) {
    case SET_TOTALPRODUCT: {
      return { ...state, totalproduct: action.payload };
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
export default ReducerTotalproduct;