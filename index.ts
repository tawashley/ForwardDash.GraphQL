import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import fetch from 'node-fetch'
import { CurrentWeatherResponse } from './weather-api'

const app = express();
const port = process.env.PORT || 4000;

const typeDefs =  gql`
    # Weather Schema
    type WeatherLocation {
        name: String!
        region: String!
        country: String!
        lat: Float!,
        lon: Float!,
        tz_id: String!
        localtime_epoch: Int!,
        localtime: String!
    }

    type WeatherCondition {
        text: String!
        iconSrc: String!
        code: Int! #This code can be mapped from https://www.weatherapi.com/docs/conditions.json e.g. 1000 means "Sunny"
    }

    type WeatherTemperature {
        celsius: Float!
        fahrenheit: Float!
    }

    type WeatherWindDirection {
        degree: Int!
        compass: String!
    }

    type WeatherVelocity {
        mph: Float!
        kph: Float!
    }

    type WeatherWind {
        mph: Float!
        kph: Float!
        direction: WeatherWindDirection!
    }

    type WeatherPressure {
        millibars: Float!
        inches: Float!
    }

    type WeatherRain {
        millimeters: Float!
        inches: Float!
    }

    type WeatherCurrent {
        temperature: WeatherTemperature!
        feelsLike: WeatherTemperature!
        condition: WeatherCondition!
        wind: WeatherWind!
        gust: WeatherVelocity!
        pressure: WeatherPressure!
        rain: WeatherRain!
        humidityPercentage: Int!
        cloudCoverPercentage: Int!
        isDaytime: Boolean!
        uvIndex: Float!

    }

    type Weather {
        location: WeatherLocation!
        current: WeatherCurrent!
    }

    # Query Schema
    type Query {
        weather(location: String!): Weather
    }
`

// Weather connector
const WeatherConnector = {
    getCurrentForecase: async (location: string): Promise<CurrentWeatherResponse> => {
        const url = new URL('/', 'https://api.weatherapi.com',)

        url.pathname = 'v1/current.json'

        url.searchParams.append('key', '31c6aec8b2074ce0802210520202302')
        url.searchParams.append('q', location)

        return fetch(url.toString()).then((response) => response.json())
    }
}

// Weather model
const WeatherModel = {
    getCurrentForecast: async (location: string) => {
        const response = await WeatherConnector.getCurrentForecase(location)
        const { current } = response

        // TODO - map condition.code to a string
        return {
            temperature: {
                celsius: current.temp_c,
                fahrenheit: current.temp_f
            },
            feelsLike: {
                celsius: current.feelslike_c,
                fahrenheit: current.feelslike_f
            },
            condition: {
                text: current.condition.text,
                iconSrc: current.condition.icon,
                code: current.condition.code
            },
            wind: {
                mph: current.wind_mph,
                kph: current.wind_kph,
                direction: {
                  degree: current.wind_degree,
                  compass: current.wind_dir
                }
            },
            gust: {
                mph: current.gust_mph,
                kph: current.gust_kph
            },
            pressure: {
                millibars: current.pressure_mb,
                inches: current.pressure_in
            },
            rain: {
                millimeters: current.precip_mm,
                inches: current.precip_in
            },
            humidityPercentage: current.humidity,
            cloudCoverPercentage: current.cloud,
            isDaytime: current.is_day,
            uvIndex: current.uv,
        }
    }
}

const current = async (location: any, args: any, context: any) => {
    return WeatherModel.getCurrentForecast(location)
}

const resolvers = {
    Query: {
      weather: (root: any, { location }: any, context: any) => {
          return location
      }
    },
    Weather: {
        current
    }
  }

const server = new ApolloServer({
  typeDefs,
  resolvers
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
