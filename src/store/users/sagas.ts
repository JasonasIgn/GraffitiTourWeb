import { put, call, takeEvery, take } from 'redux-saga/effects'
import Router from 'next/router'
import * as actions from './actions'
import { api } from '../../utils/api'
import config from '../../config'
import { UserActionTypes } from './types'
import { clearStorageData } from '../../utils'
import { pages } from '../../components'

export function* profileRequest() {
  try {
    const payload = yield call(api, config.apiMethods.GET, 'user')
    yield put(actions.profileRequestSuccess(payload))
  } catch (e) {
    const error = yield e
    yield put(actions.profileRequestFailure(error))
  }
}

export function* logoutRequest() {
  try {
    yield call(api, config.apiMethods.POST, 'logout')
    clearStorageData()
    Router.push(pages.login.path)
    yield put(actions.logoutRequestSuccess())
  } catch (e) {
    const error = yield e
    yield put(actions.logoutRequestFailure(error))
  }
}

export function* registerRequest(data) {
  try {
    yield call(api, config.apiMethods.POST, 'users', data)
    Router.push(pages.login.path)
    yield put(actions.registerRequestSuccess())
  } catch (e) {
    const errors = yield e
    yield put(actions.registerRequestFailure(errors))
  }
}

export function* watchLogoutRequest() {
  yield call(logoutRequest)
}

export function* watchProfileRequest() {
  yield call(profileRequest)
}

export function* watchRegisterRequest() {
const { data } = yield take(UserActionTypes.REGISTER_REQUEST)
yield call(registerRequest, data)
}

export default function*() {
  yield takeEvery(UserActionTypes.PROFILE_REQUEST, watchProfileRequest)
  yield takeEvery(UserActionTypes.LOGOUT_REQUEST, watchLogoutRequest)
  yield takeEvery(UserActionTypes.REGISTER_REQUEST, watchRegisterRequest)
}
