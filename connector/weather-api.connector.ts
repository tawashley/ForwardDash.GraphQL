import fetch from 'node-fetch'

import { CurrentWeatherResponse } from './types/weather-api'

const makeRequest = (path: string, location: string) => {
    const url = new URL('/', 'https://api.weatherapi.com',)

    url.pathname = `v1/${path}.json`

    url.searchParams.append('key', '31c6aec8b2074ce0802210520202302')
    url.searchParams.append('q', location)

    return fetch(url)
        .then((response) => response.json())
}

export const WeatherConnector = {
    getCurrentForecase: (location: string): Promise<CurrentWeatherResponse> => {
        return makeRequest('current', location)
    }
}
