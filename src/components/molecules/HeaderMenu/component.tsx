import React from 'react'
import { color, media } from '../../../theme'
import { Link, DropDown } from '../..'
import { isUserActive } from '../../../utils'
import { pages } from '../../pages'

const menuPages = [pages.register, pages.login]

export const HeaderMenu = ({ profile }) => {
  console.log(profile, 'CIA')
  return (
    <div className="userMenu">
      {profile.username ? (
        <DropDown
          closeOnClick
          autoWidth={false}
          display={<span>Welcome, {profile.username}</span>}>
          <div className="dropDownItemsContentWrapper">
            <span
              className="dropDownItem"
              onClick={() => {
                console.log('log out')
              }}>
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
      <style jsx>
        {`
        .linksWrapper {
          margin-left: 25;
          font-size: 14px;
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
        // ${[media()]} {
        //     display: none;
        // }
        .dropDownWrapper {
          height: 40px;
          margin-left: 10px;
          padding: 0px 10px;
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
    </div>
  )
}
