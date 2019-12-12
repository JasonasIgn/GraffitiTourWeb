import { connect } from 'react-redux'
import { LoginComponent } from '.'

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent)
