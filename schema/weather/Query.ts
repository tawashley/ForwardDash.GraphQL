import { QueryToWeatherResolver, WeatherToCurrentResolver } from '../../types/index'
import { WeatherModel } from '../../models/weather.model'

export const Query = `
    type Weather {
        location: WeatherLocation!
        current: WeatherCurrent!
    }

    extend type Query {
        weather(location: String!): Weather!
    }
`

const current: WeatherToCurrentResolver = async (location, args, context) => {
    return WeatherModel.getCurrentForecast(location)
}

const weather: QueryToWeatherResolver = (root, { location }, context) => {
    return location
}

export const queryResolver = {
    Query: {
      weather
    },
    Weather: {
        current
    }
}
