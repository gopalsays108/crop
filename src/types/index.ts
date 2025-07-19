export interface Farmer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address: string;
  village: string;
  district: string;
  state: string;
  registeredBy: string;
  registrationDate: string;
}

export interface Land {
  id: string;
  farmerId: string;
  area: number; // in acres
  soilType: string;
  irrigationType: string;
  latitude: number;
  longitude: number;
  surveyNumber: string;
}

export interface Crop {
  id: string;
  farmerId: string;
  landId: string;
  cropType: string;
  variety: string;
  sowingDate: string;
  expectedHarvestDate: string;
  area: number;
  estimatedYield: number;
  currentStage: string;
  riskLevel: 'low' | 'medium' | 'high';
  lastAssessment: string;
}

export interface RiskAssessment {
  id: string;
  cropId: string;
  date: string;
  weatherRisk: number;
  pestRisk: number;
  diseaseRisk: number;
  overallRisk: number;
  recommendations: string[];
  assessedBy: string;
}

export interface Notification {
  id: string;
  type: 'weather' | 'pest' | 'disease' | 'harvest' | 'insurance';
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'critical';
  farmerId?: string;
  cropId?: string;
  date: string;
  read: boolean;
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  forecast: string;
  riskFactors: string[];
}