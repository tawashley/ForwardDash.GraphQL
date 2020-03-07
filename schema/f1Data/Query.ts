import { F1DataToRaceScheduleResolver, F1RaceScheduleToRacesResolver } from '../../gql-types'
import { F1DataModel } from '../../models/f1Data.model'

export const Query = `
    extend type Query {
        f1Data: F1Data!
    }

    type F1Data {
        raceSchedule(year: String!): F1RaceSchedule!
    }

    type F1RaceSchedule {
        numberOfRaces: Int!
        races: [F1DataCircuit!]!
    }
`

const raceSchedule: F1DataToRaceScheduleResolver = async (root, { year }, context) => {
    return F1DataModel.getRacesFromYear(year)
}

export const queryResolver = {
    Query: {
        f1Data: () => []
    },
    F1Data: {
        raceSchedule
    }
}
