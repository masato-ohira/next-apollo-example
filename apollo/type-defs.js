import { gql } from '@apollo/client'

export const typeDefs = gql`
  type User {
    id: Int
    name: String
  }

  type Query {
    users: [User]
  }
`
