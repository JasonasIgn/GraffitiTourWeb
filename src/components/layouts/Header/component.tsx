import React from 'react'
import Link from 'next/link'
import { pages } from '../..'
import { Image } from '../..'
import { images } from '../../../utils'

const linkStyle = {
  marginRight: 15,
}

export const Header = () => (
  <header>
    <Image src={images.logo} alt="logo" height="40px" width={undefined} />
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
    <style jsx>
      {`
        header {
          display: flex;
        }
      `}
    </style>
  </header>
)
