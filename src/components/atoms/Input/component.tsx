import React from 'react'
import { color } from '../../../theme'
import { Flex } from '..'

export const Input = ({
  children,
  error = '',
  field,
  form,
  type,
  label = '',
  ...props
}) => (
  <Flex position="relative" direction="column">
    <label>{label}</label>
    {React.createElement(type === 'textarea' ? 'textarea' : 'input', {
      ...field,
      ...props,
      type,
      title: label,
    })}
    <style global jsx>
      {`
        input {
          resize: none;
          width: 100%;
          outline: none;
          box-sizing: border-box;
          height: ${type === 'textarea' ? 'auto' : '40px'};
          background-color: ${color('light', 100)};
          color: black;
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 8px;
          padding-bottom: 8px;
          border-radius: 4px;
          font-size: 14px;
          border: 1px solid
            ${form && form.errors[field.name] && form.touched[field.name]
              ? 'red'
              : 'transparent'};
        }
        label {
          display: block;
          color: black;
          font-size: 18px;
          pointerevents: none;
        }
      `}
    </style>
  </Flex>
)
