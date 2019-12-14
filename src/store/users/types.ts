export enum UserActionTypes {
  PROFILE_REQUEST = '@@users/PROFILE_REQUEST',
  PROFILE_SUCCESS = '@@users/PROFILE_SUCCESS',
  PROFILE_FAILURE = '@@users/PROFILE_FAILURE',
}
export interface ProfileData {
  username: string
  email: string
}
export interface UsersState {
  profile: ProfileData
}
