import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

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
        isDaytime: Int!
        uvIndex: Float!

    }

    type Weather {
        location: WeatherLocation!
        current: WeatherCurrent!
    }

    # Query Schema

    type Query {
        hello: String
        weather(location: String!): Weather
    }
`

const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      weather: (root: any, { location }: any, context: any) => {
          return location
      }
    },
    Weather: {
        current: (location: any) => {
            return {
                isDaytime: false
            }
        }
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
