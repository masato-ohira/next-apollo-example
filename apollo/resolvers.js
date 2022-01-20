export const resolvers = {
  Query: {
    users() {
      return [
        {id: 1, name: 'Lorem Ipsum'},
        {id: 2, name: 'simply dummy'},
        {id: 3, name: 'unknown printer'},
        {id: 4, name: 'electronic'},
      ]
    }
  },
}
