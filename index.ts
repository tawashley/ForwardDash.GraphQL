import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const app = express();
const port = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'Hello world!',
    },
  },
  playground: true
})

server.applyMiddleware({ app })

app.listen(port, () => {
    console.log(`🚀 Server ready`);
    console.log(`Playground can be accessed at http://localhost:${port}/graphql`)
})
