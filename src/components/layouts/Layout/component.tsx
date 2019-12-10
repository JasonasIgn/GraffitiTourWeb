import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '..'

const layoutStyle = {
  minHeight: '100vh',
  width: '100%',
}

export const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
  </div>
)

const proptypes = {
  children: PropTypes.node,
}

Layout.propTypes = proptypes
