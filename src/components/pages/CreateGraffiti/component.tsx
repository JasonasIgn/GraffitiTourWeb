import React from 'react'
import { Table } from '../..'
import { color } from '../../../theme'
import { Button } from '../../atoms'


export const CreateGraffitiPage = ({ graffities = [] }) => (
  <div className="page-wrapper">
    <div>
      <h1>Create graffiti</h1>
      {/* <Create */}
    </div>
    <style jsx>
      {`
        h1 {
          color: ${color('light', 200)};
        }
      `}
    </style>
  </div>
)
