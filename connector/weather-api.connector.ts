import fetch from 'node-fetch'

import { CurrentWeatherResponse, ForecastResponse } from './types/weather-api'

const makeRequest = (path: string, location: string, days?: string) => {
    const url = new URL('/', 'https://api.weatherapi.com',)

    url.pathname = `v1/${path}.json`

    url.searchParams.append('key', '31c6aec8b2074ce0802210520202302')
    url.searchParams.append('q', location)

    if(days) {
        url.searchParams.append('days', days);
    }

    return fetch(url)
        .then((response) => response.json())
}

export const WeatherConnector = {
    getCurrentForecast: async (location: string): Promise<CurrentWeatherResponse> => {
        return makeRequest('current', location)
    },
    getDaysForecast: async (location: string, days: string): Promise<ForecastResponse> => {
        return makeRequest('forecast', location, days)
    }
}
