import { LOGIN_REQUEST, UserActionsType, LOGIN_SUCCESS, LOGIN_FAILURE } from './types'

export const userReducer = (userState = {}, action: UserActionsType) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return action.user
    case LOGIN_SUCCESS:
      return action.user
    case LOGIN_FAILURE:
      return {}
    default:
      return userState
  }
}
