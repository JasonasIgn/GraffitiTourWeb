import React from 'react'
import { Formik } from 'formik'
import { LoginForm } from '.'
import { connect } from 'react-redux'
import { loginRequest } from '../../../store/auth/actions'

interface LoginFormProps {
  loginRequest: typeof loginRequest
}

const initialValues = {
  username: '',
  password: '',
}

const LoginFormContainerComponent = ({ loginRequest }: LoginFormProps) => {
  console.log(loginRequest)
  const onSubmit = async values => {
    loginRequest(values)
  }
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      <LoginForm />
    </Formik>
  )
}

const mapStateToProps = state => ({
  userState: state.userReducer,
})

const mapDispatchToProps = {
  loginRequest,
}

export const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormContainerComponent)
