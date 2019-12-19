import React from 'react'
import { Table } from '../..'
import { color } from '../../../theme'

const data = [
  {
    id: 1,
    name: 'HAHA',
    longtitude: 15.156,
    latitude: 6456.15,
    created_at: 'asd',
  },
]

const rowStructure = graffiti => ({
  rowContents: [
    {
      title: 'Name',
      content: (graffiti && graffiti.name) || '',
    },
    {
      title: 'Longtitude',
      content: graffiti && graffiti.longtitude,
    },
    {
      title: 'Latitude',
      content: graffiti && graffiti.latitude,
    },
    {
      title: 'Created at',
      content: graffiti && graffiti.created_at,
    },
  ],
})

export const MyGraffitiesPage = () => (
  <div className="page-wrapper">
    <div>
      <h1>My graffities</h1>
    </div>
    <div className="tableWrapper">
      <Table
        data={data}
        rowStructure={rowStructure}
        notFoundText="You don't have any graffities"
      />
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
          color: ${color('light', 200)}
        }
      `}
    </style>
  </div>
)
