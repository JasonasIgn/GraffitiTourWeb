import React from 'react'
import { color } from '../../../theme'
import NextJSLink from 'next/link'

export const Link = ({ href, children, className = '' }) => (
  <NextJSLink href={href}>
    <a className={className}>
      {children}
      <style jsx>{`
        a {
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>
    </a>
  </NextJSLink>
)
