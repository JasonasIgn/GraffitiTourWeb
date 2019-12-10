import {
  UserActionsType,
  LOGIN_REQUEST,
  UserState,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './types'
import { userService } from '../../utils/services/user'

export const login = (username: String, password: String) => {
  return dispatch => {
    dispatch(request({ username: username, loggedIn: false }))
    userService.login(username, password).then(
      user => {
        dispatch(success(user))
      },
      error => {
        dispatch(failure(error.toString()))
      },
    )
  }

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
}
