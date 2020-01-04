import React from 'react'
import { pages } from '..'
import { GoogleMaps } from '../../molecules'
import { color } from '../../../theme'

const googleMapsContainerStyles = {
  height: '600px',
}

export const HomepageComponent = () => (
  <div>
    <h1>Eplore nearby graffities</h1>
    <GoogleMaps containerStyles={googleMapsContainerStyles} />
    <style jsx>
      {`
        div {
          width: 100%;
        }
        h1 {
          margin-top: 0px;
          color: ${color('light', 200)};
        }
      `}
    </style>
  </div>
)
