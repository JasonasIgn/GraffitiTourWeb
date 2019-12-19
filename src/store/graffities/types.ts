import { FieldError } from '../general/types'

export enum GraffitiActionTypes {
  MY_GRAFFITIES_REQUEST = '@@users/MY_GRAFFITIES_REQUEST',
  MY_GRAFFITIES_SUCCESS = '@@users/MY_GRAFFITIES_SUCCESS',
  MY_GRAFFITIES_FAILURE = '@@users/MY_GRAFFITIES_FAILURE',
}

export interface GraffitiesState {
  graffities: Graffiti[]
}

export interface Graffiti {
  id: number
  name: string
  latitude: number
  longtitude: number
  created_at: Date
}
