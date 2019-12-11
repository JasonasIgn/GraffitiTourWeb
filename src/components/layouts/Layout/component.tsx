import React from 'react'
import { Header } from '..'
import { Flex } from '../../atoms'

export const Layout = ({ children }) => (
  <div>
    <Header />
    <Flex>{children}</Flex>
    <style jsx>{`
      min-height: 100vh;
      width: 100%;
      box-sizing: border-box;
    `}</style>
  </div>
)
