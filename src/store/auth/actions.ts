import { AuthActionTypes } from './types'

export const loginRequest = payload => ({
  type: AuthActionTypes.LOGIN_REQUEST,
  payload,
})
export const loginRequestSuccess = data => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  data: data
})
export const loginRequestFailure = (error: String) => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  error,
})
