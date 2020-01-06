import React from 'react'
import { color } from '../../../theme'
import { EditGraffitiForm } from '../../organisms/EditGraffitiForm'
import { Graffiti } from '../../../store/graffities/types'

interface Props {
  graffiti: Graffiti
  graffitiRequest: Function
}

export const EditGraffitiPageComponent: React.FunctionComponent<Props> = ({
  graffiti,
  graffitiRequest,
}) => {
  return (
    <div className="pageWrapper">
      <h1>Edit graffiti</h1>
      <EditGraffitiForm graffiti={graffiti} />
      <style jsx>
        {`
          .ratingsWrapper {
            margin-top: 15px;
          }
          .ratingsUpperContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .starRatingWrapper {
            position: absolute;
            top: 5px;
            right: 15px;
            display: flex;
            align-items: center;
            font-size: 24px;
          }
          .starRatingWrapper div {
            font-size: 13px;
            margin-top: 4px;
            color: ${color('light', 300)};
          }
          label {
            font-size: 18px;
          }
          .sliderWrapper {
            width: 500px;
            height: max-content;
          }
          .rightContent {
            margin-left: 10px;
          }
          .pageWrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 30px;
            margin: 50px;
            width: 100%;
            background-image: linear-gradient(
              to bottom right,
              ${color('grey', 800)},
              ${color('light', 700)}
            );
            border-radius: 8px;
          }
          h1,
          h2,
          h4 {
            color: ${color('light', 300)};
            text-align: center;
          }
          .upperContent {
            display: flex;
            max-height: 700px;
          }
          .googleMapsWrapper {
            width: 100%;
            height: 400px;
            margin-top: 30px;
          }
        `}
      </style>
    </div>
  )
}