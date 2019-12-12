import React from 'react'
import { Form, ErrorMessage } from 'formik'
import { FormField, Button } from '../..'

export const LoginForm = () => {
  return (
    <div className="login-form-wrapper" >
      <h1>Login</h1>
      <Form className="login-form">
        <FormField name="username" label="Username" />
        <FormField name="password" label="Password" />
        <Button type="submit"> Login </Button>
      </Form>
      <style jsx>
        {`
          .login-form-wrapper {
            max-width: 340px;
            width: 100%;
            margin-top: 40px;
          }

          h1 {
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}
