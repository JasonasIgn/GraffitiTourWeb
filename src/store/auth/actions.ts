import { AuthActionTypes, LoginData, AuthPayload, FieldError } from './types'

export const loginRequest = (payload: LoginData) => ({
  type: AuthActionTypes.LOGIN_REQUEST,
  payload,
})
export const loginRequestSuccess = (data: AuthPayload) => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  data: data,
})
export const loginRequestFailure = (errors: FieldError[]) => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  errors,
})
