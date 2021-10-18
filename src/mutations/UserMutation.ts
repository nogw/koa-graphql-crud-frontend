import { graphql } from 'babel-plugin-relay/macro'

export const UserMutation = graphql`
  mutation UserMutation ($input: CreateUserInput!) {
    userCreateMutation (input: $input) {
      token
      error
    }
  }
`