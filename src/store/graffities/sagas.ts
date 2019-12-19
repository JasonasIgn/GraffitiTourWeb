import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'
import { api } from '../../utils/api'
import config from '../../config'
import { GraffitiActionTypes } from './types'


export function* myGraffitiesRequest() {
  try {
    const payload = yield call(api, config.apiMethods.GET, 'user/graffities')
    yield put(actions.myGraffitiesSuccess(payload))
  } catch (e) {
    const error = yield e
    yield put(actions.myGraffitiesFailure(error))
  }
}


export function* watchMyGraffitiesRequest() {
  yield call(myGraffitiesRequest)
}

export default function*() {
  yield takeEvery(GraffitiActionTypes.MY_GRAFFITIES_REQUEST, watchMyGraffitiesRequest)
}
