import React, { Component } from 'react'
import { pages } from '..'
import { LoginFormContainer } from '../../organisms'
import { UserState } from '../../../store/users/types'

interface LoginPageProps { set: Function; userState: UserState }

export class LoginComponent extends Component<LoginPageProps, {}> {
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
      <div>
        <h1>{pages.login.title}</h1>
        <h1>{userState.username}</h1>
        <LoginFormContainer />
      </div>
    )
  }
}
