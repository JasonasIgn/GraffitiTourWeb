import { all, fork } from 'redux-saga/effects'
import authSaga from './auth/sagas'

const sagas = [authSaga]

export default function* (services = {}) {
  yield all(sagas.map(saga => fork(saga, services)))
}
