import 'reflect-metadata'
import { schema } from './index'

import path from 'path'
import { generateTypeScriptTypes } from 'graphql-schema-typescript'

const outputFolder = path.join(__dirname, '..', 'types', 'index.d.ts')

generateTypeScriptTypes(schema, outputFolder, {
    global: false,
})
    .then(() => {
        console.log('Done!')
        process.exit(0)
    })
    .catch(err => {
        console.error('Error!', err)
    })
