import React, { useState } from 'react'
import { color, media } from '../../../theme'
import { Link, DropDown } from '../..'
import { pages } from '../../pages'
import { Sidebar } from '../../organisms/Sidebar'

const menuPages = [pages.register, pages.login]

export const HeaderMenuComponent = ({ profile, logoutRequest }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  return (
    <React.Fragment>
      <button
        type="button"
        onClick={() => setSidebarOpened(!sidebarOpened)}
        className="menu-btn"
      />
      <Sidebar
        opened={sidebarOpened}
        profile={profile}
        logoutRequest={logoutRequest}
        setSidebarOpened={setSidebarOpened}
      />
      <div className="userMenu">
        {profile.username ? (
          <DropDown
            closeOnClick
            autoWidth={false}
            display={
              <span className="username-text">Welcome, {profile.username}</span>
            }>
            <div className="dropDownItemsContentWrapper">
              <span className="dropDownItem" onClick={() => logoutRequest()}>
                <span className="logoutText">Log out</span>
              </span>
            </div>
          </DropDown>
        ) : (
          <div className="linksWrapper">
            {menuPages.map(page => (
              <Link key={page.path} href={page.path} className="header-link">
                {page.title}
              </Link>
            ))}
          </div>
        )}
      </div>
      <style jsx>
        {`
          .linksWrapper {
            margin-left: 25;
            font-size: 14px;
          }
          logoutText {
            color: ${color('grey', 700)};
          }
          span {
            color: ${color('grey', 200)};
          }
          .dropDownItemsContentWrapper {
            display: flex;
            justify-content: center;
            height: 40px;
            align-items: center;
            border: 1px solid ${color('light', 200)};
            box-shadow: 0px 4px 12px 0px ${color('blue', 800, 0.32)};
            background-color: ${color('white')};
          }
          .dropdownitem: {
            display: flex;
            font-weight: 400;
            text-transform: none;
            text-align: left;
            background-color: ${color('white')};
            whitespace: nowrap;
            padding: 20px;
            font-size: 14px;
            cursor: pointer;
          }
          .userMenu {
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          @media ${media()} {
            .userMenu {
              display: none;
            }
          }
          .dropDownWrapper {
            height: 40px;
            margin-left: 10px;
            padding: 0px 10px;
          }
          .menu-btn {
            display: none;
            cursor: pointer;
            outline: none;
            margin: 0;
            padding: 0;
            background: none;
            border: none;
            width: 30px;
          }

          @media ${media()} {
            .menu-btn {
              display: block;
            }
          }

          .menu-btn:before,
          .menu-btn:after {
            background-color: #fff;
            content: '';
            display: block;
            height: 4px;
            transition: all 200ms ease-in-out;
          }
          .menu-btn:before {
            box-shadow: 0 10px 0 #fff;
            margin-bottom: 16px;
          }
          .menu-btn:before {
            ${sidebarOpened &&
              `box-shadow: 0 0 0 #fff;
            transform: translateY(10px) rotate(45deg);`}
          }
          .menu-btn:after {
            ${sidebarOpened && `transform: translateY(-10px) rotate(-45deg);`}
          }
          
        `}
      </style>
      <style jsx global>
        {`
          .header-link {
            margin-left: 15px;
            color: ${color('light', 100)};
          }
        `}
      </style>
    </React.Fragment>
  )
}
