import React from 'react'
import { images } from '../../../utils'
import { color, media } from '../../../theme'
import { Button, Link, Image } from '../..'
import { pages } from '../../pages'

const menuPages = [pages.register, pages.login]

export const Sidebar = ({
  opened,
  profile,
  logoutRequest,
  setSidebarOpened,
}) => {
  return (
    <nav className={`sidebar-wrapper ${opened ? 'opened' : ''}`}>
      <div className="sidebar-content">
        {profile.username && (
          <React.Fragment>
            <div className="sidebar-header">
              <div className="user-pic">
                <Image src={images.user} height="60px" alt="user" />
              </div>
              <div className="user-info">
                <span className="user-name">
                  <strong>{profile.username}</strong>
                </span>
                <span className="user-email">
                  <span>{profile.email}</span>
                </span>
                <span className="user-role">Administrator</span>
              </div>
            </div>
            <hr />
          </React.Fragment>
        )}
        <div className="sidebar-menu">
          <div className="higher-container">
            {!profile.username && menuPages.map(page => (
              <Link key={page.path} href={page.path}>
                <Button
                  color={color('blue', 500)}
                  borderRadius='0px'
                  onClick={() => setSidebarOpened(false)}
                  textColor={color('white')}
                  width="100%">
                  {page.title}
                </Button>
                <hr />
              </Link>
            ))}
          </div>
          {profile.username && (
            <div className="lower-container">
              <Button
                width="100%"
                color={color('light', 300)}
                borderRadius="0px"
                onClick={logoutRequest}>
                Log out
              </Button>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          hr {
            margin: 0px;
            border: 1px solid ${color('blue', 300)};
          }
          .logout-button {
            width: 100%;
          }
          .higher-container {
            flex-grow: 1;
          }
          .sidebar-wrapper {
            display: none;
            width: 260px;
            height: 100%;
            max-height: 100%;
            position: fixed;
            top: 60px;
            right: -260px;
            z-index: 999;
            transition: all 0.25s ease;
          }

          .sidebar-menu {
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          @media ${media()} {
            .sidebar-wrapper {
              display: flex;
            }
          }

          .sidebar-content {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-height: calc(100% - 60px);
            height: calc(100% - 60px);
            overflow-y: auto;
            position: relative;
            background-color: ${color('blue', 400)};
          }

          .opened {
            position: fixed;
            top: 60px;
            right: 0px;
            border-radius: 0 4px 4px 0px;
            transition-delay: 0.3s;
          }

          .sidebar-header {
            display: flex;
            padding: 10px 20px;
            background-color: ${color('blue', 500)};
          }

          .user-info {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-left: 10px;
          }
        `}
      </style>
    </nav>
  )
}
