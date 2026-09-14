export interface SensorData {
  id: string
  name: string
  unit: string
  value: number
  valueDisplay: string
  data: number[]
  spikeAt: number | number[]
  status: 'normal' | 'elevated'
  color: string
  colorHex: string
  description: string
  baseline?: string
  change?: string
  icon: string
}

export const SENSORS: SensorData[] = [
  {
    id: 'eda',
    name: 'EDA',
    unit: 'μS',
    value: 4.2,
    valueDisplay: '4.2',
    data: [3.6, 3.7, 3.9, 4.0, 4.8, 4.5, 4.3, 4.2, 4.2, 4.2],
    spikeAt: 4,
    status: 'elevated',
    color: 'text-cyan-400',
    colorHex: '#22d3ee',
    description:
      'Measures skin conductance driven by eccrine sweat gland activity. Reflects sympathetic nervous system arousal. Elevated values indicate increased autonomic activation associated with stress or mood state changes.',
    baseline: '3.6 μS',
    change: '+0.6 μS',
    icon: 'zap',
  },
  {
    id: 'emg',
    name: 'EMG',
    unit: 'μV',
    value: 18.3,
    valueDisplay: '18.3',
    data: [14, 15, 16, 15.5, 22, 26, 20, 18, 18.5, 18.3],
    spikeAt: [4, 5],
    status: 'elevated',
    color: 'text-purple-400',
    colorHex: '#c084fc',
    description:
      'Measures electrical activity in the upper trapezius muscle. Captures muscle tension and sustained contraction associated with psychosomatic stress and agitation preceding mood episode onset.',
    baseline: '14.0 μV',
    change: '+4.3 μV',
    icon: 'activity',
  },
  {
    id: 'temp',
    name: 'Temperature',
    unit: '°C',
    value: 36.8,
    valueDisplay: '36.8',
    data: [36.5, 36.6, 36.7, 36.8, 36.7, 36.9, 36.8, 36.7, 36.8, 36.8],
    spikeAt: 5,
    status: 'normal',
    color: 'text-orange-400',
    colorHex: '#fb923c',
    description:
      'Monitors peripheral skin temperature to detect thermoregulatory variation. Captures circadian phase shifts and temperature nadir disruptions that correlate with sleep-wake cycle changes in bipolar disorder.',
    baseline: '36.5 °C',
    change: '+0.3 °C',
    icon: 'thermometer',
  },
  {
    id: 'accel',
    name: 'Accelerometer',
    unit: 'g',
    value: 0.12,
    valueDisplay: '0.12',
    data: [0.08, 0.09, 0.11, 0.1, 0.18, 0.24, 0.15, 0.12, 0.11, 0.12],
    spikeAt: [4, 5],
    status: 'normal',
    color: 'text-green-400',
    colorHex: '#4ade80',
    description:
      'Measures micromotion and body movement to quantify motor activity and postural agitation. Provides continuous actigraphy data correlated with psychomotor changes in bipolar disorder.',
    baseline: '0.09 g',
    change: '+0.03 g',
    icon: 'move',
  },
  {
    id: 'cortisol',
    name: 'Cortisol',
    unit: 'ng/mL',
    value: 12.4,
    valueDisplay: '12.4',
    data: [10.2, 10.8, 11.3, 11.9, 13.5, 14.1, 13.2, 12.7, 12.4, 12.4],
    spikeAt: [4, 5],
    status: 'elevated',
    color: 'text-red-400',
    colorHex: '#f87171',
    description:
      'Electrochemical channel measuring cortisol concentration in sweat as a biochemical stress marker. Provides a proxy for HPA axis activation, complementing autonomic signals from EDA and EMG.',
    baseline: '10.2 ng/mL',
    change: '+2.2 ng/mL',
    icon: 'droplets',
  },
]
