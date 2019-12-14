import { UserActionTypes, ProfileData } from './types'
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
