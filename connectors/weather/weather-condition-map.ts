interface WeatherCondition {
    id: string
    name: string
    longName: string
}

interface WeatherConditionMap {
    [key: number]: WeatherCondition
}

export const weatherConditionMap: WeatherConditionMap = {
    1000: {
        id: 'sunny',
        name: 'Sunny',
        longName: 'Sunny'
    },
    1003: {
        id: 'partly-cloud',
        name: 'Partly cloudy',
        longName: 'Partly cloudy'
    },
    1006: {
        id: 'cloudy',
        name: 'Cloudy',
        longName: 'Cloudy'
    },
    1009: {
        id: 'overcast',
        name: 'Overcast',
        longName: 'Overcast'
    },
    1030: {
        id: 'mist',
        name: 'Mist',
        longName: 'Mist'
    },
    1063: {
        id: 'rain-possible',
        name: 'Rain possible',
        longName: 'Patchy rain possible'
    },
    1066: {
        id: 'snow-possible',
        name: 'Snow possible',
        longName: 'Patchy snow possible'
    },
    1069: {
        id: 'sleet-possible',
        name: 'Sleet possible',
        longName: 'Patchy sleet possible'
    },
    1072: {
        id: 'drizzle-possible',
        name: 'Drizzle possible',
        longName: 'Patchy freezing drizzle possible'
    },
    1087: {
        id: 'thunder',
        name: 'Thunder',
        longName: 'Thundery outbreaks possible'
    },
    1114: {
        id: 'snow',
        name: 'Snow',
        longName: 'Blowing snow'
    },
    1117: {
        id: 'blizzard',
        name: 'Blizzard',
        longName: 'Blizzard'
    },
    1135: {
        id: 'fog',
        name: 'Fog',
        longName: 'Fog'
    },
    1147: {
        id: '',
        name: 'Freezing fog',
        longName: 'Freezing fog'
    },
    1150: {
        id: 'patchy-light-drizzle',
        name: 'Light drizzle',
        longName: 'Patchy light drizzle'
    },
    1153: {
        id: 'light-drizzle',
        name: 'Light drizzle',
        longName: 'Light drizzle'
    },
    1168: {
        id: 'freezing-drizzle',
        name: 'Freezing drizzle',
        longName: 'Freezing drizzle'
    },
    1171: {
        id: 'heavy-freezing-drizzle',
        name: 'Freezing Drizzle',
        longName: 'Heavy freezing drizzle'
    },
    1180: {
        id: 'patchy-light-rain',
        name: 'Light Rain',
        longName: 'Patchy light rain'
    },
    1183: {
        id: 'light-rain',
        name: 'Light Rain',
        longName: 'Light rain'
    },
    1186: {
        id: 'moderate-rain',
        name: 'Light Rain',
        longName: 'Moderate rain at times'
    },
    1189: {
        id: 'moderate-rain',
        name: 'Light Rain',
        longName: 'Moderate rain'
    },
    1192: {
        id: 'heavy-rain-at-times',
        name: 'Heavy Rain',
        longName: 'Heavy rain at times'
    },
    1195: {
        id: 'heavy-rain',
        name: 'Heavy Rain',
        longName: 'Heavy rain'
    },
    1198: {
        id: 'freezing-rain',
        name: 'Freezing Rain',
        longName: 'Light freezing rain'
    },
    1201: {
        id: 'moderate-freezing-rain',
        name: 'Moderate freezing rain',
        longName: 'Moderate or heavy freezing rain'
    },
    1204: {
        id: 'light-sleet',
        name: 'Light Sleet',
        longName: 'Light sleet'
    },
    1207: {
        id: 'moderate-sleet',
        name: 'Moderate sleet',
        longName: 'Moderate or heavy sleet'
    },
    1210: {
        id: 'light-snow-patchy',
        name: 'Light snow',
        longName: 'Patchy light snow'
    },
    1213: {
        id: 'light-snow',
        name: 'Light Snow',
        longName: 'Light snow'
    },
    1216: {
        id: 'patchy-moderate-snow',
        name: 'Moderate Snow',
        longName: 'Patchy moderate snow'
    },
    1219: {
        id: 'moderate-snow',
        name: 'Moderate snow',
        longName: 'Moderate snow'
    },
    1222: {
        id: 'patchy-heavy-snow',
        name: 'Heavy Snow',
        longName: 'Patchy heavy snow'
    },
    1225: {
        id: 'heavy-snow',
        name: 'Heavt Snow',
        longName: 'Heavy snow'
    },
    1237: {
        id: 'ice-pellets',
        name: 'Ice pellets',
        longName: 'Ice pellets'
    },
    1240: {
        id: 'light-showers',
        name: 'Light Showers',
        longName: 'Light rain shower'
    },
    1243: {
        id: 'moderate-showers',
        name: 'Moderate Showers',
        longName: 'Moderate or heavy rain shower'
    },
    1246: {
        id: 'torrential-showers',
        name: 'Torrential Showers',
        longName: 'Torrential rain shower'
    },
    1249: {
        id: 'light-sheet-showers',
        name: 'Sleet Showers',
        longName: 'Light sleet showers'
    },
    1252: {
        id: 'moderate-sleet-showers',
        name: 'Sleet Showers',
        longName: 'Moderate or heavy sleet showers'
    },
    1255: {
        id: 'light-snow-showers',
        name: 'Light Snow Showers',
        longName: 'Light snow showers'
    },
    1258: {
        id: 'moderate-snow-showers',
        name: 'Moderate Snow Showers',
        longName: 'Moderate or heavy snow showers'
    },
    1261: {
        id: 'light-ice-pellet-showers',
        name: 'Light Ice Pellet Showers',
        longName: 'Light showers of ice pellets'
    },
    1264: {
        id: 'moderate-ice-pellet-showers',
        name: 'Moderate Ice Pellet Showers',
        longName: 'Moderate or heavy showers of ice pellets'
    },
    1273: {
        id: 'light-rain-thunder',
        name: 'Light Rain & Thunder',
        longName: 'Patchy light rain with thunder'
    },
    1276: {
        id: 'moderate-rain-thunder',
        name: 'Moderate Rain & Thunder',
        longName: 'Moderate or heavy rain with thunder'
    },
    1279: {
        id: 'light-snow-thunder',
        name: 'Light Snow & Thunder',
        longName: 'Patchy light snow with thunder'
    },
    1282: {
        id: 'moderate-snow-thunder',
        name: 'Moderate Snow & Thunder',
        longName: 'Moderate or heavy snow with thunder'
    }
}
