import { combineReducers } from 'redux'
import { userReducer } from './users/reducers'
import { authReducer } from './auth/reducers'
import { all, fork } from 'redux-saga/effects'
import authSaga from './auth/sagas'
import userSaga from './users/sagas'

import { LoginState } from './auth/types'
import { UsersState } from './users/types'

export interface ApplicationState {
  login: LoginState,
  users: UsersState
}

export const rootReducer = combineReducers({
  users: userReducer,
  login: authReducer,
})

const sagas = [userSaga, authSaga]

export function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)))
}
