import { connect } from 'react-redux'
import { LoginComponent } from '.'

const mapStateToProps = state => ({
  userState: state.userReducer,
})

const mapDispatchToProps = {}

export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent)
