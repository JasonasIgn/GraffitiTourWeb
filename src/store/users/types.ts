export enum UserActionTypes {
  PROFILE_REQUEST = '@@users/PROFILE_REQUEST',
  PROFILE_SUCCESS = '@@users/PROFILE_SUCCESS',
  PROFILE_FAILURE = '@@users/PROFILE_FAILURE',
  LOGOUT_REQUEST = '@@users/LOGOUT_REQUEST',
  LOGOUT_SUCCESS = '@@users/LOGOUT_SUCCESS',
  LOGOUT_FAILURE = '@@users/LOGOUT_FAILURE',
}
export interface ProfileData {
  username: string
  email: string
}
export interface UsersState {
  profile: ProfileData
}
