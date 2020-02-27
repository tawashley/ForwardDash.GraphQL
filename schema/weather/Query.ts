import { QueryToWeatherResolver, WeatherToCurrentResolver, WeatherToForecastResolver } from '../../types/index'
import { WeatherModel } from '../../models/weather.model'

export const Query = `
    type Weather {
        location: WeatherLocation!
        current: WeatherCurrent!
        forecast(days: String!): [WeatherForecast!]!
    }

    extend type Query {
        weather(location: String!): Weather!
    }
`

const weather: QueryToWeatherResolver = (root, { location }, context) => {
    return location
}

const current: WeatherToCurrentResolver = async (location, args, context) => {
    return WeatherModel.getCurrentForecast(location)
}

const forecast: WeatherToForecastResolver = async (location, { days }, context) => {
    return WeatherModel.getDaysForecast(location, days)
}

export const queryResolver = {
    Query: {
      weather
    },
    Weather: {
        current,
        forecast
    }
}
