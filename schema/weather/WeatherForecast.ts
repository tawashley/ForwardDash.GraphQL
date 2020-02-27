const weatherForecast = `
    type WeatherForecast {
        date: String!
        dateEpoch: Int!
        maxTemperature: WeatherTemperature!
        minTemperature: WeatherTemperature!
        averageTemperature: WeatherTemperature!
        condition: WeatherCondition!
        uvIndex: Float!
        sunrise: String!
        sunset: String!
        moonrise: String!
        moonset: String!
    }

`

export const WeatherForecast = () => [weatherForecast]
