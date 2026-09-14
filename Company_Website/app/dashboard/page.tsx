'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  Zap,
  Activity,
  Thermometer,
  Move,
  Droplets,
  ChevronRight,
  RefreshCw,
} from 'lucide-react'
import { Sparkline } from '@/components/sparkline'
import { SENSORS, SensorData } from '@/lib/sensor-data'
import { clsx } from 'clsx'

const ICON_MAP: Record<string, React.ReactNode> = {
  zap: <Zap className="w-5 h-5" />,
  activity: <Activity className="w-5 h-5" />,
  thermometer: <Thermometer className="w-5 h-5" />,
  move: <Move className="w-5 h-5" />,
  droplets: <Droplets className="w-5 h-5" />,
}

const ML_ANNOTATIONS: Record<string, string> = {
  eda: 'Skin conductance elevated +17% above 7-day personalized baseline. Sympathetic arousal event detected at T-04:22. Co-elevation with EMG and cortisol indicates multi-channel autonomic activation consistent with prior pre-episode pattern.',
  emg: 'Trapezius tension elevated +31% above patient baseline. Sustained elevation exceeding 45 minutes is flagged as psychosomatic agitation. Correlated with simultaneous EDA spike at T-04:22.',
  temp: 'Peripheral temperature within normal circadian range for this patient. No significant phase shift detected relative to 7-day baseline. Monitoring for overnight nadir disruption.',
  accel: 'Movement pattern concordant with patient baseline. No agitation episodes detected in the past 12 hours. Actigraphy score: 0.82 (within normal range for this patient).',
  cortisol: 'Sweat cortisol proxy elevated +22% versus 7-day mean. Combined with EDA and EMG co-elevation, multi-axis stress activation is indicated. Recommend clinician review within 24 hours.',
}

function DetailView({ sensor, onBack }: { sensor: SensorData; onBack: () => void }) {
  return (
    <div className="animate-fade-up">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-[#585B60] hover:text-[#37639C] transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to All Sensors
      </button>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main chart */}
        <div className="lg:col-span-2 glass rounded-2xl p-6 border border-[#37639C]/12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${sensor.colorHex}18`, color: sensor.colorHex }}
              >
                {ICON_MAP[sensor.icon]}
              </div>
              <div>
                <div className="font-semibold text-[#37639C]">{sensor.name}</div>
                <div className="text-xs text-[#8B9299]">{sensor.unit}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
              <span className="text-xs text-emerald-600">Live</span>
            </div>
          </div>

          <div className="bg-[#EEF3FA] rounded-xl p-4 mb-4">
            <Sparkline
              data={sensor.data}
              color={sensor.colorHex}
              spikeAt={sensor.spikeAt}
              width={560}
              height={120}
            />
          </div>

          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold" style={{ color: sensor.colorHex }}>
              {sensor.valueDisplay}
            </span>
            <span className="text-lg text-[#8B9299] mb-1">{sensor.unit}</span>
          </div>
          <p className="text-xs text-[#8B9299] mt-1">Last 10 readings · Updated 2s ago</p>
        </div>

        {/* Metrics + ML panel */}
        <div className="flex flex-col gap-4">
          <div className="glass rounded-xl p-5 border border-[#37639C]/12">
            <h4 className="text-xs font-semibold text-[#8B9299] uppercase tracking-wider mb-4">
              Key Metrics
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#585B60]">Current</span>
                <span className="text-sm font-semibold" style={{ color: sensor.colorHex }}>
                  {sensor.valueDisplay} {sensor.unit}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#585B60]">Personalized Baseline</span>
                <span className="text-sm font-medium text-[#37639C]">{sensor.baseline}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#585B60]">Deviation</span>
                <span
                  className={clsx(
                    'text-sm font-semibold',
                    sensor.status === 'elevated' ? 'text-orange-500' : 'text-emerald-600'
                  )}
                >
                  {sensor.change}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#585B60]">Status</span>
                <span
                  className={clsx(
                    'text-xs font-medium px-2 py-0.5 rounded-full',
                    sensor.status === 'normal' ? 'status-normal' : 'status-elevated'
                  )}
                >
                  {sensor.status === 'normal' ? 'Normal' : 'Elevated'}
                </span>
              </div>
            </div>
            <p className="text-[10px] text-[#8B9299] mt-4 pt-3 border-t border-[#37639C]/[0.08]">
              Baseline is personalized per patient from rolling 7-day historical data. Deviation values are relative to this individual baseline, not population norms.
            </p>
          </div>

          <div
            className="glass rounded-xl p-5 border flex-1"
            style={{ borderColor: `${sensor.colorHex}25` }}
          >
            <h4 className="text-xs font-semibold text-[#8B9299] uppercase tracking-wider mb-3">
              BiLSTM Analysis
            </h4>
            <p className="text-xs text-[#585B60] leading-relaxed">
              {ML_ANNOTATIONS[sensor.id]}
            </p>
            <div className="mt-4 pt-3 border-t border-[#37639C]/[0.08]">
              <div className="text-xs text-[#8B9299]">Model: BiLSTM v2.1</div>
              <div className="text-xs text-[#8B9299]">Confidence: 94.2%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const [selected, setSelected] = useState<SensorData | null>(null)

  const elevatedCount = SENSORS.filter((s) => s.status === 'elevated').length

  return (
    <div className="bg-[#F0F4F8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Dashboard Header */}
        <div className="glass rounded-2xl px-6 py-4 mb-6 border border-[#37639C]/12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div>
              <div className="text-xs text-[#8B9299] mb-0.5">Patient ID</div>
              <div className="font-mono font-bold text-[#37639C]">PT-2847</div>
            </div>
            <div className="w-px h-8 bg-[#37639C]/[0.10]" />
            <div>
              <div className="text-xs text-[#8B9299] mb-0.5">Protocol</div>
              <div className="text-sm font-medium text-[#37639C]">BP-MONITOR-01</div>
            </div>
            <div className="w-px h-8 bg-[#37639C]/[0.10]" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
              <div>
                <div className="text-xs text-[#8B9299] mb-0.5">Status</div>
                <div className="text-sm font-semibold text-emerald-600">Live · Synced 2s ago</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {elevatedCount > 0 && (
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 pulse-dot" />
                <span className="text-xs font-semibold text-orange-600">
                  {elevatedCount} channel{elevatedCount > 1 ? 's' : ''} above baseline
                </span>
              </div>
            )}
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-xs text-[#585B60] hover:text-[#37639C] transition-colors border border-[#37639C]/12">
              <RefreshCw className="w-3.5 h-3.5" />
              Refresh
            </button>
          </div>
        </div>

        {selected ? (
          <DetailView sensor={selected} onBack={() => setSelected(null)} />
        ) : (
          <>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold text-[#37639C]">Sensor Overview</h2>
              <span className="text-xs text-[#8B9299]">Click any card for detail view. All deviations are relative to personalized baseline.</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SENSORS.map((sensor) => (
                <button
                  key={sensor.id}
                  onClick={() => setSelected(sensor)}
                  className="text-left glass rounded-xl p-5 card-hover border border-[#37639C]/[0.08] group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: `${sensor.colorHex}18`, color: sensor.colorHex }}
                      >
                        {ICON_MAP[sensor.icon]}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#37639C]">{sensor.name}</div>
                        <div className="text-xs text-[#8B9299]">{sensor.unit}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={clsx(
                          'text-xs font-medium px-2 py-0.5 rounded-full',
                          sensor.status === 'normal' ? 'status-normal' : 'status-elevated'
                        )}
                      >
                        {sensor.status === 'normal' ? 'Normal' : 'Elevated'}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#8B9299] group-hover:text-[#558AC4] transition-colors" />
                    </div>
                  </div>

                  <div className="flex items-end justify-between mb-2">
                    <div>
                      <span className="text-2xl font-bold" style={{ color: sensor.colorHex }}>
                        {sensor.valueDisplay}
                      </span>
                      <span className="text-sm text-[#8B9299] ml-1">{sensor.unit}</span>
                    </div>
                    <Sparkline
                      data={sensor.data}
                      color={sensor.colorHex}
                      spikeAt={sensor.spikeAt}
                      width={100}
                      height={36}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#8B9299]">
                    <span>Baseline: {sensor.baseline}</span>
                    <span
                      className={clsx(
                        sensor.status === 'elevated' ? 'text-orange-500' : 'text-emerald-600'
                      )}
                    >
                      {sensor.change}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* BiLSTM Risk Summary */}
            <div className="mt-6 glass rounded-xl p-5 border border-orange-500/20 bg-orange-500/[0.03]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-orange-600 mb-1">
                    BiLSTM Risk Assessment: Moderate
                  </div>
                  <p className="text-xs text-[#585B60] leading-relaxed">
                    3 of 5 sensor channels show readings elevated above this patient&apos;s personalized baseline. EDA, EMG, and cortisol co-elevation indicates multi-axis sympathetic nervous system activation. Risk score is computed from baseline deviation across all five input channels. Recommend clinician review within 24 hours. No immediate intervention indicated.
                  </p>
                  <p className="text-[10px] text-[#8B9299] mt-2">
                    Risk scores reflect deviation from personalized baseline, not absolute thresholds. All baselines are recalculated on a rolling 7-day window.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
