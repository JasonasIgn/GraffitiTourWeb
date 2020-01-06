import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import { AdminPanelPageComponent } from '.'
import { ApplicationState } from '../../../store'
import { ProfileData, Role } from '../../../store/users/types'
import config from '../../../config'
import { pages } from '../pagesConfig'
import { Homepage } from '../homepage'

interface PropsFromDispatch {}

interface PropsFromState {
  profile: ProfileData
}

interface test {
  getInitialProps: any
}

type AllProps = PropsFromDispatch & PropsFromState

const AdminPanelPageContainerComponent: any = ({ profile, isServer }) => {
  if (isServer) return <Homepage />
  if (
    !(
      profile.roles &&
      profile.roles.find(role => role.title === config.roles.ROLE_ADMIN.role)
    )
  ) {
    Router.push(pages.homepage.path)
  }
  return <AdminPanelPageComponent />
}

AdminPanelPageContainerComponent.getInitialProps = async ({ isServer }) => {
  return { isServer: isServer }
}

const mapStateToProps = ({ users }: ApplicationState) => ({
  profile: users.profile,
})

const mapDispatchToProps = null

export const AdminPanelPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPanelPageContainerComponent)
