import { combineReducers } from 'redux'
import { userReducer } from './users/reducers'
import { authReducer } from './auth/reducers'

const rootReducer = combineReducers({
  authReducer,
  userReducer,
})

export default rootReducer
