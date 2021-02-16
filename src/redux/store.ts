import { createStore, combineReducers } from 'redux';

import ui, { UiState } from './ui';
import auth from './auth';
import { AuthState } from './auth/auth.d';

export interface Store {
    ui: UiState;
    auth: AuthState;
}

export default createStore(combineReducers<Store>({ ui, auth }));
