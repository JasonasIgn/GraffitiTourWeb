import { FieldError } from '../general/types'

export enum UserActionTypes {
  PROFILE_REQUEST = '@@users/PROFILE_REQUEST',
  PROFILE_SUCCESS = '@@users/PROFILE_SUCCESS',
  PROFILE_FAILURE = '@@users/PROFILE_FAILURE',
  LOGOUT_REQUEST = '@@users/LOGOUT_REQUEST',
  LOGOUT_SUCCESS = '@@users/LOGOUT_SUCCESS',
  LOGOUT_FAILURE = '@@users/LOGOUT_FAILURE',
  REGISTER_REQUEST = '@@users/REGISTER_REQUEST',
  REGISTER_SUCCESS = '@@users/REGISTER_SUCCESS',
  REGISTER_FAILURE = '@@users/REGISTER_FAILURE',
}
export interface ProfileData {
  username: string
  email: string
  roles: Role[]
}

export interface RegisterData {
  username: string
  email: string
  password: string
}

export interface Role {
  title: string
}

export interface RegisterState {
  readonly loading: boolean
  readonly errors?: FieldError[]
}

export interface UsersState {
  register: RegisterState
  profile: ProfileData
}
