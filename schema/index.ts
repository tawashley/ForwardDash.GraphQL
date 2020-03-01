import { merge } from 'lodash'
import { makeExecutableSchema } from 'apollo-server'

import { weatherSchema, weatherResolver } from './weather'
import { f1DataSchema, f1DataResolver } from './f1Data'

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
    ...weatherSchema,
    ...f1DataSchema
]

const resolvers = merge(
    rootResolver,
    weatherResolver,
    f1DataResolver
)

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})
