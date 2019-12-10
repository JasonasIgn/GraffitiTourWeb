import React from 'react'

export const Flex = ({
  direction = 'row',
  wrap = 'no-wrap',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  order = '0',
  grow = '0',
  shrink = '1',
  basis = 'auto',
  height = 'auto',
  width = 'auto',
  margin = '0px',
  padding = '0px',
  position = 'static',
  ...props
}) => (
  <div {...props}>
    <style jsx>
      {`
        div {
          flex-direction: ${direction};
          flex-wrap: ${wrap};
          align-items: ${alignItems};
          justify-content: ${justifyContent};
          order: ${order};
          flex-grow: ${grow};
          flex-shrink: ${shrink};
          flex-basis: ${basis};
          height: ${height};
          width: ${width};
          margin: ${margin};
          padding: ${padding};
          position: ${position};
        }
      `}
    </style>
  </div>
)