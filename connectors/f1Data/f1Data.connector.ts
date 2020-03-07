import fetch from 'node-fetch'
import { RaceScheduleResponse } from '../types/ergast-f1'

const makeRequest = (path: string) => {
    const url = new URL('/', 'https://ergast.com/')

    url.pathname = `api/f1/${path}.json`

    return fetch(url)
        .then((response) => response.json())
}

export const ErgastF1Connector = {
    async getRacesForAYear(year: string): Promise<RaceScheduleResponse> {
        return makeRequest(year);
    }
}
