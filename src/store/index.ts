import { combineReducers } from 'redux'
import { userReducer } from './users/reducers'
import { authReducer } from './auth/reducers'
import { all, fork } from 'redux-saga/effects'
import authSaga from './auth/sagas'

import { LoginState } from './auth/types'

export interface ApplicationState {
  login: LoginState
}

export const rootReducer = combineReducers({
  // user: userReducer,
  login: authReducer,
})

const sagas = [authSaga]

export function* rootSaga(services = {}) {
  yield all(sagas.map(saga => fork(saga, services)))
}
