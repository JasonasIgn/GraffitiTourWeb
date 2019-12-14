import React from 'react'
import { Form } from 'formik'
import { FormField, Button, ErrorMessage } from '../..'
import { FieldError } from '../../../store/general/types'
import { getError } from '../../../utils'

interface LoginFormProps {
  errors?: FieldError[]
}

export const LoginForm: React.FunctionComponent<LoginFormProps> = ({
  errors,
}) => {
  return (
    <div className="login-form-wrapper">
      <h1>Login</h1>
      <Form className="login-form">
        <FormField name="email" label="Email" />
        <FormField name="password" label="Password" />
        <Button type="submit"> Login </Button>
        <div className="error-wrapper">
          <ErrorMessage>{getError(errors)}</ErrorMessage>
        </div>
      </Form>
      <style jsx>
        {`
          .login-form-wrapper {
            max-width: 340px;
            width: 100%;
            margin-top: 40px;
          }
          .error-wrapper {
            text-align: center;
            width: 100%;
            margin-top: 10px;
          }
          h1 {
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}
