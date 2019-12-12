import { AuthActionTypes, AuthActionsType } from './types'

export const authReducer = (state = {}, action: AuthActionsType) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
      return { ...state, loading: true }
    case AuthActionTypes.LOGIN_SUCCESS:
      return { ...state, loading: false }
    case AuthActionTypes.LOGIN_FAILURE:
      return { ...state, loading: false }
    default:
      return state
  }
}
