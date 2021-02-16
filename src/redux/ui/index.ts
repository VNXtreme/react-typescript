import { combineReducers } from 'redux';

import sidebar, { UiSidebarState } from './sidebar';

export interface UiState {
  sidebar: UiSidebarState;
}

const reducer = combineReducers<UiState>({ sidebar });

export default reducer;
