import React from 'react'
import { Header } from '..'
import { Flex } from '../../atoms'

export const LayoutComponent = ({ children }) => (
  <div>
    <Header />
    <Flex justifyContent="center" grow="1" className="content-container">
      {children}
    </Flex>
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        box-sizing: border-box;
      }
    `}</style>
    <style jsx global>{`
      .content-container {
        padding: 0 20px;
      }
    `}</style>
  </div>
)
