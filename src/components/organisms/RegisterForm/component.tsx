import React from 'react'
import { Form } from 'formik'
import { FormField, Button, ErrorMessage } from '../..'
import { FieldError } from '../../../store/general/types'
import { getError } from '../../../utils'

interface RegisterFormProps {
  errors?: FieldError[]
}

export const RegisterForm: React.FunctionComponent<RegisterFormProps> = ({
  errors,
}) => {
  return (
    <div className="register-form-wrapper">
      <h1>Register</h1>
      <Form className="register-form">
        <FormField name="username" label="Username" />
        <FormField name="email" label="Email" />
        <FormField name="password" label="Password" />
        <FormField name="repeat-password" label="Repeat password" />
        <FormField name="TAC" type="checkbox" label="I agree with the rules" />
        <Button type="submit"> Register </Button>
        <div className="error-wrapper">
          <ErrorMessage>{getError(errors)}</ErrorMessage>
        </div>
      </Form>
      <style jsx>
        {`
          .register-form-wrapper {
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
