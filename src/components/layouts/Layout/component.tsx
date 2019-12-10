import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '..'
import { Flex } from '../../atoms'

const layoutStyle = {
  minHeight: '100vh',
  width: '100%',
  padding: 20,
}

export const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    <Flex>{children}</Flex>
  </div>
)

const proptypes = {
  children: PropTypes.node,
}

Layout.propTypes = proptypes
