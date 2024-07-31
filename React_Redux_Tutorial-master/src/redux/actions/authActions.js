
export const ActionTypes = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT'
  };
  
  export const loginSuccess = (user) => {
    return {
      type: ActionTypes.LOGIN_SUCCESS,
      payload: user
    };
  };
  
  export const loginFailure = (error) => {
    return {
      type: ActionTypes.LOGIN_FAILURE,
      payload: error
    };
  };
  
  export const logout = () => {
    return {
      type: ActionTypes.LOGOUT
    };
  };
  