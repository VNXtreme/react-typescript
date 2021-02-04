import { Actions, types } from './actions';
import { AuthState } from '.';

const initialState: AuthState = {
  isAuth: false,
};

const reducer = (state = initialState, action: Actions): AuthState => {
  const newState = { ...state };
  switch (action.type) {
    case types.SET_IS_AUTH:
      newState.isAuth = action.payload;
      return newState;
    default:
      return state;
  }
};

export default reducer;
