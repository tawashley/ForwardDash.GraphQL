import { GQLWeatherCurrent, GQLWeatherForecast, GQLWeatherCondition } from '../gql-types'
import { WeatherConnector, CurrentWeatherResponse, ForecastResponse, WeatherCondition, weatherConditionMap } from '../connectors/weather'

function mapConditionData(condition: WeatherCondition): GQLWeatherCondition {
    const { id, longName, name } = weatherConditionMap[condition.code]

    return {
        text: name,
        textLong: longName,
        iconSrc: condition.icon,
        id
    }
}

function mapCurrentForecastResponse(response: CurrentWeatherResponse): GQLWeatherCurrent {
    const { current, location } = response
    const { condition } = current

    return {
        location: {
            country: location.country,
            name: location.name,
            region: location.region,
            latitude: location.lat,
            longitude: location.lon,
            timeEpoch: location.localtime_epoch,
            timeFormatted: location.localtime,
            timezone: location.tz_id
        },
        temperature: {
            celsius: current.temp_c,
            fahrenheit: current.temp_f
        },
        feelsLike: {
            celsius: current.feelslike_c,
            fahrenheit: current.feelslike_f
        },
        condition: mapConditionData(condition),
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
        isDaytime: !!current.is_day,
        uvIndex: current.uv
    }
}

function mapDaysForecastResponse({ forecast }: ForecastResponse): GQLWeatherForecast[] {
    return forecast.forecastday.map<GQLWeatherForecast>((forecast) => {
        const { astro, date, date_epoch, day  } = forecast

        return  {
            minTemperature: {
                celsius: day.mintemp_c,
                fahrenheit: day.mintemp_f
            },
            maxTemperature: {
                celsius: day.maxtemp_c,
                fahrenheit: day.maxtemp_f
            },
            averageTemperature: {
                celsius: day.avgtemp_c,
                fahrenheit: day.avgtemp_f
            },
            condition: mapConditionData(day.condition),
            date,
            dateEpoch: date_epoch,
            moonrise: astro.moonrise,
            moonset: astro.moonset,
            sunrise: astro.sunrise,
            sunset: astro.sunset,
            uvIndex: day.uv
        }
    })
}

export const WeatherModel = {
    getCurrentForecast: async (location: string): Promise<GQLWeatherCurrent> => {
        const response = await WeatherConnector.getCurrentForecast(location)

        return mapCurrentForecastResponse(response)
    },
    getDaysForecast: async (location: string, days: string): Promise<GQLWeatherForecast[]> => {
        const response = await WeatherConnector.getDaysForecast(location, days)

        return mapDaysForecastResponse(response)
    }
}
