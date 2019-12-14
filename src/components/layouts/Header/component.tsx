import React, { FunctionComponent } from 'react'
import { pages } from '../..'
import { color } from '../../../theme'
import { Image, Flex, Link } from '../..'
import { ProfileData } from '../../../store/users/types'
import { images } from '../../../utils'

interface HeaderProps {
  profile: ProfileData
}

const menuPages = [pages.register, pages.login]

export const HeaderComponent: FunctionComponent<HeaderProps> = ({ profile }) => (
  <header>
    <div className="header-content">
      <Link href={pages.homepage.path} className="header-logo">
        <Image src={images.logo} height="40px" alt="logo" />
      </Link>
      <Flex>
        {profile.username ? <span>Welcome, {profile.username}</span> :
          menuPages.map(page => (
            <Link key={page.path} href={page.path} className="header-link">
              {page.title}
            </Link>
          ))
        }
      </Flex>
    </div>
    <style jsx>
      {`
        header {
          display: flex;
          height: 60px;
          width: 100%;
          justify-content: center;
        }
        .header-content {
          display: flex;
          width: 100%;
          max-width: 1440px;
          background-color: ${color('blue', 200)};
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }
      `}
    </style>
    <style jsx global>
      {`
        .header-link {
          margin-left: 15px;
          color: ${color('light', 100)};
        }
        .header-logo {
          height: 40px;
        }
      `}
    </style>
  </header>
)
