import { UserActionTypes, UsersState } from './types'

export const initialState: UsersState = {
  profile: {
    username: '',
    email: '',
  },
  register: {
    errors: undefined,
    loading: false,
  },
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          username: action.profile.username,
          email: action.profile.email,
        },
      }
    case UserActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        profile: initialState.profile,
      }
    case UserActionTypes.REGISTER_REQUEST:
      return { ...state, register: { loading: true, errors: undefined } }
    case UserActionTypes.REGISTER_SUCCESS:
      return { ...state, register: { loading: false } }
    case UserActionTypes.REGISTER_FAILURE:
      return { ...state, register: { loading: false, errors: action.errors } }
    default:
      return state
  }
}
