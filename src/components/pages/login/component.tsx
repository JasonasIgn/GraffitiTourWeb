import React from 'react'
import { LoginFormContainer } from '../..'
// import { UserState } from '../../../store/users/types'

// interface LoginPageProps {
//   userState: UserState
// }

export const LoginComponent = () => (
  // static getInitialProps = async ({ isServer }) => {
  //   const user = await fetch(
  //     'https://jsonplaceholder.typicode.com/todos/1',
  //     config.fetchMethods.GET, undefined
  //   )
  //   return { isServer, user }
  // }

  // const { userState } = this.props
  <React.Fragment>
    <LoginFormContainer />
  </React.Fragment>
)
