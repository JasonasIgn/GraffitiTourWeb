import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { CreateGraffitiFormComponent } from '.'
import { FieldError } from '../../../store/general/types'
import { ApplicationState } from '../../../store'
import { createGraffitiRequest } from '../../../store/graffities/actions'

interface PropsFromDispatch {
  createGraffitiRequest: typeof createGraffitiRequest
}

interface PropsFromState {
  loading: Boolean
  errors?: FieldError[]
}

type AllProps = PropsFromState & PropsFromDispatch

const initialValues = {
  name: 'testas',
  description: 'descirption',
  latitude: 10.55,
  longtitude: 15.65,
}

const CreateGraffitiFormContainerComponent: React.FunctionComponent<
  AllProps
> = ({ createGraffitiRequest, loading, errors }) => {
  const onSubmit = async values => {
    const createGraffitiData = {
      name: values.name,
      description: values.description,
      latitude: values.latitude,
      longtitude: values.longtitude,
    }
    createGraffitiRequest(createGraffitiData)
  }
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      <CreateGraffitiFormComponent errors={errors} />
    </Formik>
  )
}

const mapStateToProps = ({ graffiti }: ApplicationState) => ({
  loading: graffiti.createGraffiti.loading,
  errors: graffiti.createGraffiti.errors,
})

const mapDispatchToProps = dispatch => ({
  createGraffitiRequest: createGraffitiData =>
    dispatch(createGraffitiRequest(createGraffitiData)),
})

export const CreateGraffitiForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateGraffitiFormContainerComponent)
