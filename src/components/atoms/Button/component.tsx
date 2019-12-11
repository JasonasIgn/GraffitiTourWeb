import React from 'react'
import { font, color } from '../../../theme'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: Boolean
  width?: String
  noStyles?: Boolean
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  loading,
  disabled,
  type,
  onClick,
  width,
  noStyles,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={noStyles ? 'buttonWithoutStyles' : 'button'}
    disabled={disabled}>
    {children}
    <style jsx>
      {`
        .button {
          transition: 200ms ease-in-out;
          background-size: 220% 500%;
          background-position: 100% 100%;
          background-image: white;
          color: black;
          border: none;
          display: inline-flex;
          borderradius: ${loading ? '50%' : '26px'};
          justify-content: center;
          align-items: center;
          min-width: ${loading ? '52px' : width};
          width: ${loading ? '52px' : width};
          height: 52px;
          // fontFamily: font();
          font-weight: 600;
          font-size: 12;
          text-transform: uppercase;
          padding: ${loading ? '5px' : '5px 20px'};
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          pointerevents: ${disabled ? 'none' : 'auto'};
          user-select: none;
        }
        .button:focus {
          outline: 'none';
        }
        .button:hover:not([disabled]) {
          box-shadow: 0 4px 10px 0 ${color('light', 300, 0.32)};
          background-size: 300% 300%;
          background-position: 0% 0%;
        }
        .button:active:not([disabled]) {
          background-image: red;
          box-shadow: 0 4px 10px 0 ${color('light', 300, 0.32)};
        }
        .button:disabled,
        .button[disabled]:not([disabled='false']) {
          cursor: default;
          background-image: ${loading && color('light', 500)};
        }

        buttonwithoutstyles: {
          border: none;
          background: none;
          outline: none;
          padding: 0px;
        }
      `}
    </style>
  </button>
)

Button.defaultProps = {
  type: 'button',
  loading: false,
  noStyles: false,
  width: 'auto',
}
