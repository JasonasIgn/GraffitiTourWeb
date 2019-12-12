export enum AuthActionTypes {
  LOGIN_REQUEST = '@@auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@@auth/LOGIN_FAILURE',
}

interface LoginData {
  username: String,
  password: String
}

interface LoginRequestAction {
  type: typeof AuthActionTypes.LOGIN_REQUEST
  payload: LoginData
}

interface LoginRequestSuccessAction {
  type: typeof AuthActionTypes.LOGIN_SUCCESS
}

interface LoginRequestFailureAction {
  type: typeof AuthActionTypes.LOGIN_FAILURE
  error: String
}

export type AuthActionsType =
  | LoginRequestAction
  | LoginRequestFailureAction
  | LoginRequestSuccessAction
