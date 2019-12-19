import React from 'react'
import { pages } from '..'
import { GoogleMaps } from '../../molecules'
import { color } from '../../../theme'

export const HomepageComponent = () => (
  <div>
    <h1>Eplore nearby graffities</h1>
    <GoogleMaps />
    <style jsx>
      {`
        div {
          width: 100%;
        }
        h1 {
          color: ${color('light', 200)};
        }
      `}
    </style>
  </div>
)
