import reducer from './reducer';
import * as uiSidebarActions from './actions';

export interface UiSidebarState {
  isOpen: boolean;
  hierarchy?: any;
}

export {
  uiSidebarActions,
};

export default reducer;
