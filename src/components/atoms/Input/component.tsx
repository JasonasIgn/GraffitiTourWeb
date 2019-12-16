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
}) => {
  return (
    <Flex position="relative" direction="column">
      <label>{label}</label>
      <input {...field} {...props} type={type} title={label}/>
      {/* {React.createElement(type === 'textarea' ? 'textarea' : 'input', {
        ...field,
        ...props,
        type,
        title: label,
      })} */}
      <style jsx>
        {`
          input {
            resize: none;
            width: 100%;
            outline: none;
            box-sizing: border-box;
            height: ${type === 'textarea' ? 'auto' : '40px'};
            background-color: ${color('grey', 200)};
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
            color: ${color('grey', 300)};
            font-size: 16px;
            font-weight: 600;
            pointer-events: none;
            margin-bottom: 4px;
          }
        `}
      </style>
    </Flex>
  )
}
