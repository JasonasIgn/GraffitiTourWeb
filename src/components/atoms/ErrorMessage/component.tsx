import React from 'react'

export const ErrorMessage = ({ children }) => (
  <React.Fragment>
    <span className="error">
      {children}
    </span>
    <style jsx>
      {`
      span {
        width: '100%',
        minHeight: '19px',
        textAlign: 'left',
        whiteSpace: 'pre-wrap',
        boxSizing: 'content-box',
      }`}
    </style>
  </React.Fragment>
)
