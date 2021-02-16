import { Actions, types } from './actions';
import { AuthState } from './auth.d';

const initialState: AuthState = {
  isAuth: false,
  staffName: '',
  role: 3,
};

const reducer = (state = initialState, { type, payload }: Actions): AuthState => {
  const newState = { ...state };
  switch (type) {
    case types.SET_IS_AUTH:
      newState.isAuth = payload;
      return newState;

    case types.SET_STAFF_NAME:
      newState.staffName = payload;
      return newState;

    default:
      return state;
  }
};

export default reducer;
