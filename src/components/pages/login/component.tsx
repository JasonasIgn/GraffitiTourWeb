import React, { Component } from 'react'
import { LoginFormContainer } from '../..'
import { UserState } from '../../../store/users/types'

interface LoginPageProps {
  userState: UserState
}

export class LoginComponent extends Component<LoginPageProps> {
  // static getInitialProps = async ({ isServer }) => {
  //   const user = await fetch(
  //     'https://jsonplaceholder.typicode.com/todos/1',
  //     config.fetchMethods.GET, undefined
  //   )
  //   return { isServer, user }
  // }

  render() {
    const { userState } = this.props
    console.log(this.props)
    return (
      <React.Fragment>
        <h1>{userState.username}</h1>
        <LoginFormContainer />
      </React.Fragment>
    )
  }
}
