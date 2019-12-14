import { UserActionTypes, UsersState } from './types'

export const initialState: UsersState = {
  profile: {
    username: '',
    email: '',
  },
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.PROFILE_REQUEST:
      return { ...state }
    case UserActionTypes.PROFILE_SUCCESS:
      return {
        ...state,
        profile: { username: action.profile.username, email: action.profile.email },
      }
    case UserActionTypes.PROFILE_FAILURE:
      return { ...state }
    default:
      return state
  }
}
