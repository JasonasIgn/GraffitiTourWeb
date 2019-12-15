import React from 'react'
import { Header } from '..'
import { Flex } from '../../atoms'
import { Footer } from '../../molecules'

export const LayoutComponent = ({ children }) => (
  <div>
    <Header />
    <Flex justifyContent="center" grow="1" className="content-container">
      {children}
    </Flex>
    <Footer />
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
        min-height: calc(100vh - 60px);
        padding: 0 20px;
      }
    `}</style>
  </div>
)
