import React from 'react'
import { Form, Field, ErrorMessage } from 'formik'

export const LoginForm = () => {
  return (
    <Form>
      <label>username</label>
      <Field name="username" />
      <ErrorMessage name="username" />
      <label>password</label>
      <Field name="password" />
      <ErrorMessage name="password" />
      <button type="submit"> Login </button>
    </Form>
  )
}