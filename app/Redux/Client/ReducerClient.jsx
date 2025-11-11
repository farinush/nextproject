import { SET_ERROR, SET_CLIENT, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  client: {},
  error: "",
};
const ReducerClient = (state = initialstate, action) => {
  switch (action.type) {
    case SET_CLIENT: {
      return { ...state, client: action.payload };
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
export default ReducerClient;