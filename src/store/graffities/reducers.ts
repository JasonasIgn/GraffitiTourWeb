import { GraffitiActionTypes, GraffitiesState } from './types'

export const initialState: GraffitiesState = {
  graffities: [],
  createGraffiti: {
    loading: false,
    errors: undefined,
  },
}

export const graffitiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GraffitiActionTypes.MY_GRAFFITIES_SUCCESS:
      return {
        ...state,
        graffities: action.data,
      }
    case GraffitiActionTypes.CREATE_GRAFFITI_REQUEST:
      return { ...state, register: { loading: true, errors: undefined } }
    case GraffitiActionTypes.CREATE_GRAFFITI_SUCCESS:
      return { ...state, register: { loading: false } }
    case GraffitiActionTypes.CREATE_GRAFFITI_FAILURE:
      return { ...state, register: { loading: false, errors: action.errors } }
    default:
      return state
  }
}
