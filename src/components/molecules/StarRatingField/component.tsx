import React from 'react'
import { Flex } from '../..'
import StarRating from 'react-star-rating-component'
import { color } from '../../../theme'

export const StarRatingField = ({
  label,
  children,
  field,
  name,
  error,
  form,
  ...props
}) => (
  <Flex direction="row" alignItems="center" alignContent="auto" margin="auto">
    {label && (
      <div className="labelWrapper">
        <label htmlFor={name || field.name}>{label}</label>
        {children}
      </div>
    )}
    <StarRating
      onStarClick={val => {
        const { setFieldValue } = form
        setFieldValue(name || field.name, val)
      }}
      {...field}
      {...props}
      name={name || field.name}
      error={
        !!error ||
        (form && form.errors[field.name] && !!form.touched[field.name])
      }
      id={name || field.name}
    />

    <style jsx>
      {`
        .labelWrapper {
          padding-left: 10px;
          text-align: left;
          cursor: pointer;
          user-select: none;
          color: ${color('grey', 200)};
        }
      `}
    </style>
  </Flex>
)
