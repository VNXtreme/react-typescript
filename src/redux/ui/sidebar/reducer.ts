import { types, Actions } from './actions';
import { UiSidebarState } from '.';

const initialState: UiSidebarState = {
  isOpen: true,
  hierarchy: undefined,
};

const reducer = (state = initialState, action: Actions): UiSidebarState => {
  const newState = { ...state };
  switch (action.type) {
    case types.SET_IS_OPEN:
      newState.isOpen = action.payload;
      return newState;
    case types.SET_HIERARCHY:
      newState.hierarchy = action.payload;
      return newState;
    default:
      return state;
  }
};

export default reducer;
