
import { ActionTypes } from '../actions/authActions';

const initialState = {
  isAuthenticated: !!localStorage.getItem('authToken'),
  user: JSON.parse(localStorage.getItem('authUser')) || null,
  error: null
};

  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.LOGIN_SUCCESS:
        localStorage.setItem('user', JSON.stringify(action.payload));
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          error: null
        };
      case ActionTypes.LOGIN_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: action.payload
        };
      case ActionTypes.LOGOUT:
        localStorage.removeItem('user');
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: null
        };
      default:
        return state;
    }
};

export default authReducer;
