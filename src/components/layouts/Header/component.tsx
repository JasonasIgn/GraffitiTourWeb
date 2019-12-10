import React from 'react'
import Link from 'next/link'
import { pages } from '../..'

const linkStyle = {
  marginRight: 15,
}

export const Header = () => (
  <div>
    <Link href={pages.homepage.path}>
      <button type="button" style={linkStyle}>
        {pages.homepage.title}
      </button>
    </Link>
    <Link href={pages.login.path}>
      <button type="button" style={linkStyle}>
        {pages.login.title}
      </button>
    </Link>
    <Link href={pages.register.path}>
      <button type="button" style={linkStyle}>
        {pages.register.title}
      </button>
    </Link>
  </div>
)
