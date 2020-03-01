const f1DataCircuit = `
    type F1DataCircuit {
        round: Int!
        raceName: String!
        circuitName: String!
        date: String!
        country: String!
        location: String!
    }
`

export const F1DataCircuit = () => [f1DataCircuit]
