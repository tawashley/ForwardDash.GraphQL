import { GQLWeatherCurrent, GQLWeatherForecast } from '../types/index'

import { conditionsData } from '../connector/weather-api-conditions'
import { WeatherConnector } from '../connector/weather-api.connector'
import { CurrentWeatherResponse, ForecastResponse, ConditionListItem } from '../connector/types/weather-api'

export const WeatherModel = {
    getCurrentConditionFromCode: (conditionCode: number) => {
        return conditionsData.find((condition) => condition.code === conditionCode) as ConditionListItem
    },
    mapCurrentForecastResponse: (response: CurrentWeatherResponse): GQLWeatherCurrent => {
        const { current } = response
        const { condition } = current

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
                text: condition.text,
                code: condition.code,
                iconSrc: condition.icon
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
            isDaytime: !!current.is_day,
            uvIndex: current.uv
        }
    },
    mapDaysForecastResponse: ({ forecast }: ForecastResponse): GQLWeatherForecast[]  => {
        return forecast.forecastday.map<GQLWeatherForecast>((forecast) => {
            const { astro, date, date_epoch, day  } = forecast

            return  {
                minTemperature: {
                    celsius: day.mintemp_c,
                    fahrenheit: day.mintemp_f
                },
                maxTemperature: {
                    celsius: day.mintemp_c,
                    fahrenheit: day.mintemp_f
                },
                averageTemperature: {
                    celsius: day.avgtemp_c,
                    fahrenheit: day.avgtemp_f
                },
                condition: {
                    iconSrc: day.condition.icon,
                    text: day.condition.text,
                    code: day.condition.code
                },
                date,
                dateEpoch: date_epoch,
                moonrise: astro.moonrise,
                moonset: astro.moonset,
                sunrise: astro.sunrise,
                sunset: astro.sunset,
                uvIndex: day.uv
            }
        })
    },
    getCurrentForecast: async (location: string): Promise<GQLWeatherCurrent> => {
        const response = await WeatherConnector.getCurrentForecast(location)

        return WeatherModel.mapCurrentForecastResponse(response)
    },
    getDaysForecast: async (location: string, days: string): Promise<GQLWeatherForecast[]> => {
        const response = await WeatherConnector.getDaysForecast(location, days)

        return WeatherModel.mapDaysForecastResponse(response)
    }
}
