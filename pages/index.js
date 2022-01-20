import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { initializeApollo } from '../apollo/client'

const usersQuery = gql`
  query usersQuery {
    users {
      id
      name
    }
  }
`

const Index = () => {
  const {
    data: { users },
  } = useQuery(usersQuery)

  return (
    <>
      <div className="container py-4">
        <div>
          <ul>
            {users.map((item) => {
              return (
                <li>
                  <div className="field is-grouped">
                    <div className="control">{item.id}</div>
                    <div className="control">{item.name}</div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: usersQuery,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index
