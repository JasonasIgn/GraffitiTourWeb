import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'
import { api } from '../../utils/api'
import { AuthActionTypes } from './types'

export function* loginRequest(data) {
  try {
    console.log('kviecia login request')
    const detail = yield call(api, 'post', '/login', data)
    yield put(actions.loginRequestSuccess(detail))
  } catch (e) {
    const error = yield e
    yield put(actions.loginRequestFailure(error))
  }
}

export function* watchLoginRequest({ payload }) {
  yield call(loginRequest, payload)
}

export default function*(data) {
  yield takeEvery(AuthActionTypes.LOGIN_REQUEST, watchLoginRequest, data)
}
