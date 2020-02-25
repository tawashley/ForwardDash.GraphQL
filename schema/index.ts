import { merge } from 'lodash'
import { makeExecutableSchema } from 'apollo-server'

import { weatherSchema, weatherResolver } from './weather'

const rootSchema = [
    `
    type Query {
        name: String!
    }
    `
]

const rootResolver = {
    Query: {
        name: () => "forward-dash"
    }
}

const typeDefs = [
    ...rootSchema,
    ...weatherSchema
]

const resolvers = merge(
    rootResolver,
    weatherResolver
)

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})
