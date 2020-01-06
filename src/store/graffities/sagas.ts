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

export function* adminGraffitiesRequest(setState) {
  try {
    const payload = yield call(api, config.apiMethods.GET, 'graffittis')
    setState(payload)
    yield put(actions.adminGraffitiesSuccess(payload))
  } catch (e) {
    const error = yield e
    yield put(actions.adminGraffitiesFailure(error))
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

export function* graffitiRequest(id) {
  try {
    const payload = yield call(api, config.apiMethods.GET, `graffittis/${id}`)
    yield put(actions.graffitiRequestSuccess(payload))
  } catch (e) {
    const errors = yield e
    yield put(actions.graffitiRequestFailure(errors))
  }
}


export function* watchMyGraffitiesRequest() {
  yield call(myGraffitiesRequest)
}

export function* watchAdminGraffitiesRequest() {
  const { setState } = yield take(GraffitiActionTypes.ADMIN_GRAFFITIES_REQUEST)
  yield call(adminGraffitiesRequest, setState)
}


export function* watchGraffitiRequest() {
  const { id } = yield take(GraffitiActionTypes.GRAFFITI_REQUEST)
  yield call(graffitiRequest, id)
}


export function* watchGraffitiesRequest() {
  yield call(graffitiesRequest)
}

export function* watchCreateGraffitiRequest() {
  const { data } = yield take(GraffitiActionTypes.CREATE_GRAFFITI_REQUEST)
  yield call(createGraffitiRequest, data)
}

export default function*() {
  yield takeEvery(GraffitiActionTypes.GRAFFITI_REQUEST, watchGraffitiRequest)
  yield takeEvery(GraffitiActionTypes.MY_GRAFFITIES_REQUEST, watchMyGraffitiesRequest)
  yield takeEvery(GraffitiActionTypes.CREATE_GRAFFITI_REQUEST, watchCreateGraffitiRequest)
  yield takeEvery(GraffitiActionTypes.GRAFFITIES_REQUEST, watchGraffitiesRequest)
  yield takeEvery(GraffitiActionTypes.ADMIN_GRAFFITIES_REQUEST, watchAdminGraffitiesRequest)
}
