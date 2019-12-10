export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST
  user: UserState
}

interface LoginRequestSuccessAction {
  type: typeof LOGIN_SUCCESS
  user: UserState
}

interface LoginRequestFailureAction {
  type: typeof LOGIN_FAILURE
  error: String
}

export interface UserState {
  username: String
  loggedIn: Boolean
}

export type UserActionsType =
  | LoginRequestAction
  | LoginRequestFailureAction
  | LoginRequestSuccessAction
