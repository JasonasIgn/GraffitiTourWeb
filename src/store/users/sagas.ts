import { put, call, takeEvery, take } from 'redux-saga/effects'
import * as actions from './actions'
import { api } from '../../utils/api'
import config from '../../config'
import { UserActionTypes } from './types'

export function* profileRequest() {
  try {
    const payload = yield call(api, config.apiMethods.GET, 'user')
    yield put(actions.profileRequestSuccess(payload))
  } catch (e) {
    const error = yield e
    yield put(actions.profileRequestFailure(error))
  }
}

export function* watchProfileRequest() {
  yield call(profileRequest)
}

export default function*() {
  yield takeEvery(UserActionTypes.PROFILE_REQUEST, watchProfileRequest)
}
