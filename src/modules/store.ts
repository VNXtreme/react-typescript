import { createStore, combineReducers } from 'redux';

import ui, { UiState } from './ui';
import auth, { AuthState } from './auth';

export interface Store {
    ui: UiState;
    auth: AuthState;
}

export default createStore(combineReducers<Store>({ ui, auth }));
