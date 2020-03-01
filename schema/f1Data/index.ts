import { flattenDeep} from 'lodash'
import { Query, queryResolver } from './Query'
import { F1DataCircuit } from './F1DataCircuit'

export const f1DataResolver = {
    ...queryResolver
}

export const f1DataSchema = flattenDeep([Query, F1DataCircuit])
