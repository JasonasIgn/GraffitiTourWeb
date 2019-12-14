import React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from '../../../store'
import { HeaderComponent } from './component'

const HeaderContainerComponent = ({ profile }) => (
    <HeaderComponent profile={profile} />
)

const mapStateToProps = ({ users }: ApplicationState) => ({
    profile: users.profile,
})

export const Header = connect(
    mapStateToProps,
    null,
)(HeaderContainerComponent)
