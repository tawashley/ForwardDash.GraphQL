const weather = `
    type WeatherLocation {
        name: String!
        region: String!
        country: String!
        latitude: Float!,
        longitude: Float!,
        timezone: String!
        timeEpoch: Int!,
        timeFormatted: String!
    }

    type WeatherCondition {
        text: String!
        textLong: String!
        id: String!
        iconSrc: String!
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
`

export const Weather = () => [weather]
