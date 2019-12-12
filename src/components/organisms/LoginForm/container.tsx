import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { LoginForm } from '.'
import { loginRequest } from '../../../store/auth/actions'
import { FieldError, AuthPayload } from '../../../store/auth/types'
import { ApplicationState } from '../../../store'

interface PropsFromDispatch {
  loginRequest: typeof loginRequest
}

interface PropsFromState {
  loading: Boolean
  data: AuthPayload
  errors?: FieldError[]
}

type AllProps = PropsFromState & PropsFromDispatch

const initialValues = {
  username: '',
  password: '',
}

const LoginFormContainerComponent: React.FunctionComponent<AllProps> = ({
  loginRequest,
  loading,
  data,
  errors,
}) => {
  const onSubmit = async values => {
    loginRequest(values)
  }
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      <LoginForm errors={errors} />
    </Formik>
  )
}

const mapStateToProps = ({ login }: ApplicationState) => ({
  loading: login.loading,
  data: login.data,
  errors: login.errors,
})

const mapDispatchToProps = {
  loginRequest,
}

export const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormContainerComponent)
