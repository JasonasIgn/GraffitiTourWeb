import React from 'react'
import { Table } from '../..'
import { color } from '../../../theme'
import { Button } from '../../atoms'
import { pages } from '../pagesConfig'

const rowStructure = graffiti => ({
  rowContents: [
    {
      title: 'Name',
      content: (graffiti && graffiti.name) || '',
    },
    {
      title: 'Longtitude',
      content: graffiti && graffiti.lng,
    },
    {
      title: 'Latitude',
      content: graffiti && graffiti.lat,
    },
    {
      title: 'Created at',
      content: graffiti && graffiti.created_at,
    },
  ],
})

export const AdminPanelPageComponent = ({ }) => (
  <div className="page-wrapper">
    <div>
      <h1>Admin panel</h1>
    </div>
    <style jsx>
      {`
        .tableWrapper {
          width: 100%;
        }

        .page-wrapper {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
        }

        h1 {
          color: ${color('light', 200)};
        }

        .create-button-container {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 10px;
          margin-right: 15px;
        }
      `}
    </style>
  </div>
)
