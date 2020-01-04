import Router from 'next/router'
import { put, call, takeEvery, take } from 'redux-saga/effects'
import * as actions from './actions'
import { api } from '../../utils/api'
import config from '../../config'
import { GraffitiActionTypes } from './types'
import { pages } from '../../components'


export function* myGraffitiesRequest() {
  try {
    const payload = yield call(api, config.apiMethods.GET, 'user/graffities')
    yield put(actions.myGraffitiesSuccess(payload))
  } catch (e) {
    const error = yield e
    yield put(actions.myGraffitiesFailure(error))
  }
}

export function* graffitiesRequest() {
  try {
    const payload = yield call(api, config.apiMethods.GET, 'graffittis')
    yield put(actions.graffitiesSuccess(payload))
  } catch (e) {
    const error = yield e
    yield put(actions.graffitiesFailure(error))
  }
}


export function* createGraffitiRequest(createGraffitiData) {
  try {
    yield call(api, config.apiMethods.POST, 'graffittis', createGraffitiData)
    Router.push(pages.myGraffities.path)
    yield put(actions.createGraffitiSuccess())
  } catch (e) {
    const errors = yield e
    yield put(actions.createGraffitiFailure(errors))
  }
}


export function* watchMyGraffitiesRequest() {
  yield call(myGraffitiesRequest)
}

export function* watchGraffitiesRequest() {
  yield call(graffitiesRequest)
}

export function* watchCreateGraffitiRequest() {
  const { data } = yield take(GraffitiActionTypes.CREATE_GRAFFITI_REQUEST)
  yield call(createGraffitiRequest, data)
}

export default function*() {
  yield takeEvery(GraffitiActionTypes.MY_GRAFFITIES_REQUEST, watchMyGraffitiesRequest)
  yield takeEvery(GraffitiActionTypes.CREATE_GRAFFITI_REQUEST, watchCreateGraffitiRequest)
  yield takeEvery(GraffitiActionTypes.GRAFFITIES_REQUEST, watchGraffitiesRequest)
}
