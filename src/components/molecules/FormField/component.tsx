import React from 'react'
import { Field, ErrorMessage as FormikErrorMessage } from 'formik'
import { Input, ErrorMessage } from '../..'

export const FormField = ({ type = null, name = '', label = '', ...props }) => {
  const chooseInput = () => {
    const inputType = {}
    return inputType[type] || Input
  }
  return (
    <div>
      <Field label={label} name={name} component={chooseInput()} />
      <div className="inputErrorMessageWrapper">
        <FormikErrorMessage
          name={name}
          {...props}
          render={msg => <ErrorMessage>{msg}</ErrorMessage>}
        />
      </div>
      <style jsx>
        {`
          .inputErrorMessageWrapper {
            min-height: 21px;
          }
        `}
      </style>
    </div>
  )
}