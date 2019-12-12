import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'
import { api } from '../../utils/api'
import config from '../../config'
import { AuthActionTypes } from './types'

export function* loginRequest(data) {
  try {
    console.log('kviecia login request with', data)
    const payload = yield call(api, config.apiMethods.POST, 'login', data)
    yield put(actions.loginRequestSuccess(payload))
  } catch (e) {
    const error = yield e
    yield put(actions.loginRequestFailure(error))
  }
}

export function* watchLoginRequest(data) {
  yield call(loginRequest, data)
}

export default function*(data) {
  yield takeEvery(AuthActionTypes.LOGIN_REQUEST, watchLoginRequest, data)
}
