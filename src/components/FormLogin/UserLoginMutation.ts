import { graphql } from 'babel-plugin-relay/macro'

export const UserLoginMutation = graphql`
  mutation UserLoginMutation_UserMutation ($input: UserLoginInput!) {
    userLoginMutation (input: $input) {
      token
      error
    }
  }
`