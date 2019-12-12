import {
  UserActionsType,
  LOGIN_REQUEST,
  UserState,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './types'

const request = (user: UserState): UserActionsType => ({
  type: LOGIN_REQUEST,
  user,
})
const success = (user: UserState): UserActionsType => ({
  type: LOGIN_SUCCESS,
  user,
})
const failure = (error: String): UserActionsType => ({
  type: LOGIN_FAILURE,
  error,
})
