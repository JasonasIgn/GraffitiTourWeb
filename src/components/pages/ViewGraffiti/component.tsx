import React from 'react'
import { get } from 'lodash'
import { PhotosSlider, Image, GoogleMaps } from '../..'
import { GraffitiWithPhotos } from '../../../store/graffities/types'
import config from '../../../config'
import { color } from '../../../theme'

interface Props {
  graffiti: GraffitiWithPhotos
}

const googleMapsContainerStyles = {
  height: '100%',
}

const getMainPhotoIndex = graffiti => {
  return get(graffiti, 'photos', []).findIndex(
    upload => upload.id === graffiti.thumbnail,
  )
}

export const ViewGraffitiPageComponent: React.FunctionComponent<Props> = ({
  graffiti,
}) => {
  return (
    graffiti && (
      <div className="pageWrapper">
        <div className="upperContent">
          <div className="sliderWrapper">
            <PhotosSlider
              customPaging={i => {
                return (
                  <Image
                    src={`${config.apiUrl}/photo/${get(
                      graffiti,
                      `photos[${i}].id`,
                    )}`}
                    width="100px"
                    height="100px"
                    style={{ marginTop: 20 }}
                  />
                )
              }}
              initialSlide={getMainPhotoIndex(graffiti)}>
              {get(graffiti, 'photos', []).map(upload => {
                return (
                  <div key={upload.id} className="photoSliderImageWrapper">
                    <Image
                      src={`${config.apiUrl}/photo/${upload.id}`}
                      className="photo"
                      style={{ marginLeft: 'auto', marginRight: 'auto' }}
                      height="400px"
                    />
                  </div>
                )
              })}
            </PhotosSlider>
          </div>
          <div className="rightContent">
            <h1>{graffiti.name}</h1>
            <h4>{graffiti.description}</h4>
          </div>
        </div>
        <div className="googleMapsWrapper">
          <GoogleMaps
            containerStyles={googleMapsContainerStyles}
            markers={[graffiti]}
            defaultCenter={{ lat: graffiti.lat, lng: graffiti.lng }}
            defaultZoom={12}
          />
        </div>
        <style jsx>
          {`
            .sliderWrapper {
              width: 500px;
              height: max-content;
            }
            .rightContent {
                margin-left: 10px;
            }
            .pageWrapper {
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
            h4 {
              color: ${color('light', 300)};
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
  )
}
