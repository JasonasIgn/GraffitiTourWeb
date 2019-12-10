import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LoginComponent } from '.'
import * as UserActions from '../../../store/users/actions'

const mapStateToProps = state => ({
  userState: state.userReducer,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch)

export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent)
