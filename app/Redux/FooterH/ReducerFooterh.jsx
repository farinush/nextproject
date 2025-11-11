import { SET_ERROR, SET_FOOTERH, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  footer: {},
  error: "",
};
const ReducerFooterh = (state = initialstate, action) => {
  switch (action.type) {
    case SET_FOOTERH: {
      return { ...state, footerh: action.payload };
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
export default ReducerFooterh;