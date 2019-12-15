import { UserActionTypes, ProfileData, RegisterData } from './types'
import { FieldError } from '../general/types'

export const profileRequest = () => ({
  type: UserActionTypes.PROFILE_REQUEST,
})
export const profileRequestSuccess = (data: ProfileData) => ({
  type: UserActionTypes.PROFILE_SUCCESS,
  profile: data,
})
export const profileRequestFailure = (errors: FieldError[]) => ({
  type: UserActionTypes.PROFILE_FAILURE,
  errors,
})

export const logoutRequest = () => ({
  type: UserActionTypes.LOGOUT_REQUEST,
})
export const logoutRequestSuccess = () => ({
  type: UserActionTypes.LOGOUT_SUCCESS,
})
export const logoutRequestFailure = (errors: FieldError[]) => ({
  type: UserActionTypes.LOGOUT_FAILURE,
  errors,
})

export const registerRequest = (data: RegisterData) => ({
  type: UserActionTypes.REGISTER_REQUEST,
  data: data,
})
export const registerRequestSuccess = () => ({
  type: UserActionTypes.REGISTER_SUCCESS,
})
export const registerRequestFailure = (errors: FieldError[]) => ({
  type: UserActionTypes.REGISTER_FAILURE,
  errors,
})
