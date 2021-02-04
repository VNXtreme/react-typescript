import reducer from './reducer';
import * as authActions from './actions';

export interface AuthState {
  isAuth: boolean
}

export {
  authActions,
};

export default reducer;
