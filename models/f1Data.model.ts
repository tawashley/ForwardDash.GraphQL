import { GQLF1RaceSchedule, GQLF1DataCircuit } from '../types/index'

import { ErgastF1Connector } from '../connector/ergast-f1-api.connector'
import { RaceScheduleResponse } from '../connector/types/ergast-f1'

export const F1DataModel = {
    mapRaceScheduleResponse(response: RaceScheduleResponse): GQLF1RaceSchedule  {
        const { RaceTable, total } = response.MRData

        return {
            numberOfRaces: parseInt(total),
            races: RaceTable.Races.map<GQLF1DataCircuit>((race) => {
                return {
                    circuitName: race.Circuit.circuitName,
                    country: race.Circuit.Location.country,
                    date: `${race.date}T${race.time || '00:00Z'}`,
                    location: race.Circuit.Location.locality,
                    raceName: race.raceName,
                    round: parseInt(race.round),
                }
            })
        }
    },
    async getRacesFromYear(year: string): Promise<GQLF1RaceSchedule> {
        const racesResponse = await ErgastF1Connector.getRacesForAYear(year)

        return this.mapRaceScheduleResponse(racesResponse)
    }
}
