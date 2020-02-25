import { GQLWeatherCurrent } from '../types/index'

import { conditionsData } from '../connector/weather-api-conditions'
import { WeatherConnector } from '../connector/weather-api.connector'
import { CurrentWeatherResponse, ConditionListItem } from '../connector/types/weather-api'

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
    getCurrentForecast: async (location: string): Promise<GQLWeatherCurrent> => {
        const response = await WeatherConnector.getCurrentForecast(location)

        return WeatherModel.mapCurrentForecastResponse(response)
    }
}
