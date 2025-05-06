export interface AirQualityData {
  timestamp: Date;
  co2: number;
  pm25: number;
  pm10: number;
  voc: number;
  aqi: number;
}

export interface AlertThreshold {
  co2: number;
  pm25: number;
  pm10: number;
  voc: number;
}

// Interface matching the API SensorData schema
export interface SensorData {
  timestamp: string;
  temperature: number;
  humidity: number;
  pm25: number;
  pm10: number;
  co2: number;
  voc: number;
  // Additional property used for charts
  time?: string;
}

// Interface matching the API UserSettings schema
export interface UserSettings {
  id: number;
  notifications: boolean;
  format: string;
  thresholds: {
    co2: number;
    pm25: number;
    pm10: number;
    voc: number;
  };
  user_id?: number;
}

// Legacy interfaces - keeping for backward compatibility
export interface UserSettingsLegacy {
  notificationsEnabled: boolean;
  alertThresholds: AlertThreshold;
  displayFormat: 'metric' | 'imperial';
}

export interface Alert {
  id: number;
  type: string;
  value: number;
  threshold: number;
  timestamp: string;
  acknowledged?: boolean;
}