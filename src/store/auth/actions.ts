import { AuthActionTypes, LoginData, AuthPayload, FieldError } from './types'

export const loginRequest = (data: LoginData) => ({
  type: AuthActionTypes.LOGIN_REQUEST,
  data: data,
})
export const loginRequestSuccess = (data: AuthPayload) => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  data: data,
})
export const loginRequestFailure = (errors: FieldError[]) => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  errors,
})
