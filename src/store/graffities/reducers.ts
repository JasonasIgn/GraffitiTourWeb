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
    default:
      return state
  }
}
