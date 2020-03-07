export interface RaceScheduleResponse {
    MRData: {
        xmlns: string
        series: string
        url: string
        limit: string
        offset: string
        total: string
        RaceTable: RaceScheduleList
    }
}

interface RaceScheduleList {
    season: string
    Races: RaceInfo[]
}

export interface RaceInfo {
    season: string
    round: string
    url: string
    raceName: string
    date: string
    time?: string
    Circuit: CircuitInfo
}

interface CircuitInfo {
    circuitId: string
    url: string
    circuitName: string
    Location: CircuitLocation
}

interface CircuitLocation {
    lat: string
    long: string
    locality: string
    country: string
}
