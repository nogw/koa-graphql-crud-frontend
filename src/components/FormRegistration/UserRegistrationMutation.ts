import { graphql } from 'babel-plugin-relay/macro'

export const UserRegistrationMutation = graphql`
  mutation UserRegistrationMutation_UserMutation ($input: CreateUserInput!) {
    userCreateMutation (input: $input) {
      token
      error
    }
  }
`