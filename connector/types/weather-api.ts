interface WeatherLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

interface WeatherCurrent {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface CurrentWeatherResponse {
  location: WeatherLocation;
  current: WeatherCurrent;
}

export interface ConditionListItem {
  code: number;
  day: string;
  night: string;
  icon: number;
}

interface WeatherAstro {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
}

interface WeatherDay {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
    avgtemp_c: number
    avgtemp_f: number
    maxwind_mph: number
    maxwind_kph: number
    totalprecip_mm: number
    totalprecip_in: number
    avgvis_km: number
    avgvis_miles: number
    avghumidity: number
    condition: WeatherCondition,
    uv: number
}

interface DayForecast {
    date: string
    date_epoch: number,
    day: WeatherDay,
    astro: WeatherAstro
}

export interface ForecastResponse {
    location: WeatherLocation
    current: WeatherCurrent
    forecast: {
        forecastday: DayForecast[]
    }
}

export type ConditionsList = ConditionListItem[];
