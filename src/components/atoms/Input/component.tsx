import React from 'react'
import { Flex } from '..'

export const InputComponent = ({
  children,
  error,
  field,
  form,
  type,
  label,
  ...props
}) => (
  <Flex position="relative" alignItems="center">
    <label>{label}</label>
    {React.createElement(type === 'textarea' ? 'textarea' : 'input', {
      ...field,
      ...props,
      type,
      title: label,
    })}
    <style jsx>
      {`
        input {
          resize: 'none';
          width: '100%';
          outline: none;
          height: ${type === 'textarea' ? 'auto' : '54px'};
          backgroundcolor: grey;
          color: lightgrey;
          paddingleft: 20px;
          paddingright: 20px;
          paddingtop: 16px;
          paddingbottom: 8px;
          fontsize: 14px;
          border: 1px solid
            ${form && form.errors[field.name] && form.touched[field.name]
              ? 'red'
              : 'transparent'};
        }
        label {
          display: block;
          color: black;
          fontsize: 14px;
          pointerevents: none;
        }
      `}
    </style>
  </Flex>
)
