import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { schema } from './schema'

const app = express();
const port = process.env.PORT || 4000;

const server = new ApolloServer({
    schema
})

server.applyMiddleware({
    app,
    path: '/graphql',
    cors: true
})

app.listen(port, () => {
    console.log(`🚀 Server ready`);
    console.log(`Playground can be accessed at http://localhost:${port}/graphql`)
})
