import { flattenDeep} from 'lodash'
import { Query, queryResolver } from './Query'
import { Weather } from './Weather'
import { WeatherCurrent } from './WeatherCurrent'
import { WeatherForecast } from './WeatherForecast'

export const weatherResolver = {
    ...queryResolver
}

export const weatherSchema = flattenDeep([Query, Weather, WeatherCurrent, WeatherForecast])
