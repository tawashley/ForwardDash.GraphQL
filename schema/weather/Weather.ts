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
`

export const Weather = () => [weather]