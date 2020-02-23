const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')

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
  }
})

server.applyMiddleware({ app })

app.listen(port, () => {
    console.log(`🚀 Server ready`);
    console.log(`Playground can be accessed at http://localhost:${port}/graphql`)
})
// app.listen({ port }).then(({ url }) => {
//     console.log(`🚀 Server ready at ${url}`);
// });
