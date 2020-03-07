import { GQLF1RaceSchedule, GQLF1DataCircuit } from '../gql-types'

import { ErgastF1Connector, RaceScheduleResponse } from '../connectors/f1'

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
