import { GraffitiActionTypes, Graffiti } from './types'
import { FieldError } from '../general/types'

export const myGraffitiesRequest = () => ({
  type: GraffitiActionTypes.MY_GRAFFITIES_REQUEST,
})
export const myGraffitiesSuccess = (data: Graffiti[]) => ({
  type: GraffitiActionTypes.MY_GRAFFITIES_SUCCESS,
  data,
})
export const myGraffitiesFailure = (errors: FieldError[]) => ({
  type: GraffitiActionTypes.MY_GRAFFITIES_FAILURE,
  errors,
})

export const createGraffitiRequest = (data) => ({
  type: GraffitiActionTypes.CREATE_GRAFFITI_REQUEST,
  data
})
export const createGraffitiSuccess = () => ({
  type: GraffitiActionTypes.CREATE_GRAFFITI_SUCCESS,
})
export const createGraffitiFailure = (errors: FieldError[]) => ({
  type: GraffitiActionTypes.CREATE_GRAFFITI_FAILURE,
  errors,
})
