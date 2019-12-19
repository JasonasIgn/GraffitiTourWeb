import { combineReducers } from 'redux'
import { userReducer } from './users/reducers'
import { authReducer } from './auth/reducers'
import { graffitiReducer } from './graffities/reducers'
import { all, fork } from 'redux-saga/effects'
import authSaga from './auth/sagas'
import userSaga from './users/sagas'
import graffitiSaga from './graffities/sagas'

import { LoginState } from './auth/types'
import { UsersState } from './users/types'
import { GraffitiesState } from './graffities/types'

export interface ApplicationState {
  login: LoginState
  users: UsersState
  graffiti: GraffitiesState
}

export const rootReducer = combineReducers({
  users: userReducer,
  login: authReducer,
  graffiti: graffitiReducer,
})

const sagas = [userSaga, authSaga, graffitiSaga]

export function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)))
}
