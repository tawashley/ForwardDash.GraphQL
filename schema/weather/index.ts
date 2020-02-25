import { flattenDeep} from 'lodash'
import { Query, queryResolver } from './Query'
import { Weather } from './Weather'

export const weatherResolver = {
    ...queryResolver
}

export const weatherSchema = flattenDeep([Query, Weather])
