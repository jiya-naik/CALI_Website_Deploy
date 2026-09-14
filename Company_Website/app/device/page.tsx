import Link from 'next/link'
import { ArrowRight, BatteryFull, Bluetooth, Layers, Package, CheckCircle2 } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { SensorCard } from '@/components/sensor-card'
import { SENSORS } from '@/lib/sensor-data'

const SPECS = [
  {
    icon: <BatteryFull className="w-6 h-6" />,
    label: 'Battery Life',
    value: '2-4 Weeks',
    sub: 'Continuous monitoring',
    color: '#16a34a',
  },
  {
    icon: <Bluetooth className="w-6 h-6" />,
    label: 'Connectivity',
    value: 'Bluetooth LE',
    sub: 'Low-energy streaming',
    color: '#558AC4',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    label: 'Sensors',
    value: '5 Integrated',
    sub: 'Simultaneous channels',
    color: '#37639C',
  },
  {
    icon: <Package className="w-6 h-6" />,
    label: 'Form Factor',
    value: '2" x 11" Patch',
    sub: 'Upper back, flexible',
    color: '#c084fc',
  },
]

const CLINICAL_RELEVANCE = [
  'EDA captures sympathetic nervous system arousal at sub-second resolution. Elevated EDA correlates with autonomic activation preceding mood state transitions.',
  'EMG measures upper trapezius muscle activity. Sustained tension elevation above individual baseline is associated with psychosomatic agitation in bipolar disorder.',
  'Skin temperature monitoring detects peripheral thermoregulatory variation and circadian phase shifts correlated with sleep-wake disruptions preceding episode onset.',
  'Accelerometer quantifies micromotion and postural activity. Psychomotor agitation and activity suppression are both measurable as deviations from individual actigraphy baseline.',
  'Cortisol electrochemical channel measures sweat-based biochemical stress marker, providing HPA axis activation data to complement the autonomic signals from EDA and EMG.',
]

export default function DevicePage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden dot-grid">
        <div
          className="glow-orb w-[700px] h-[700px] top-[-150px] right-[-200px] opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(85,138,196,0.12) 0%, transparent 65%)' }}
        />
        <div
          className="glow-orb w-[400px] h-[400px] bottom-[-50px] left-[-50px] opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(55,99,156,0.10) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#558AC4]/40 bg-[#558AC4]/10 mb-6">
                <span className="text-xs font-semibold text-[#558AC4] uppercase tracking-wider">
                  The Hardware
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black leading-tight tracking-tight mb-6">
                <span className="glow-text">The NeuroPatch</span>
              </h1>
              <p className="text-xl text-[#585B60] leading-relaxed mb-8">
                A flexible 2" x 11" patch worn on the upper back that simultaneously captures five physiological channels. Data streams continuously to the CALI clinical platform over Bluetooth LE without requiring patient interaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#558AC4] to-[#37639C] hover:opacity-90 transition-all shadow-lg shadow-[#558AC4]/25"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#585B60] border border-[#37639C]/20 hover:text-[#37639C] hover:border-[#37639C]/40 transition-all"
                >
                  View Dashboard
                </Link>
              </div>
            </div>

            {/* Device Illustration */}
            <div className="flex justify-center items-center relative">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-[40px]"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 50%, rgba(85,138,196,0.08) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />

                <div
                  className="relative w-64 h-40 rounded-[28px] border-2 border-[#558AC4]/40 animate-float"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(85,138,196,0.10) 0%, rgba(240,244,248,0.9) 50%, rgba(55,99,156,0.06) 100%)',
                    boxShadow: '0 0 40px rgba(85,138,196,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-black tracking-widest glow-text opacity-60">CALI</span>
                  </div>

                  {[
                    { top: '20%', left: '15%' },
                    { top: '20%', left: '50%' },
                    { top: '20%', right: '15%' },
                    { bottom: '20%', left: '20%' },
                    { bottom: '20%', right: '20%' },
                  ].map((pos, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        ...pos,
                        background: i % 2 === 0 ? '#558AC4' : '#37639C',
                        boxShadow: `0 0 8px ${i % 2 === 0 ? '#558AC4' : '#37639C'}60`,
                        animation: `pulseDot ${1.2 + i * 0.2}s ease-in-out infinite`,
                      }}
                    />
                  ))}

                  <div className="absolute top-2 right-3 flex items-center gap-1">
                    <Bluetooth className="w-3 h-3 text-[#558AC4]" />
                    <span className="text-[9px] text-[#558AC4] font-mono">BLE</span>
                  </div>
                </div>

                <div className="absolute -top-6 -left-8 glass rounded-lg px-3 py-2 text-xs font-semibold text-emerald-700 border border-emerald-500/20 whitespace-nowrap">
                  2-4 Week Battery
                </div>
                <div className="absolute -bottom-6 -right-6 glass rounded-lg px-3 py-2 text-xs font-semibold text-[#558AC4] border border-[#558AC4]/20 whitespace-nowrap">
                  5 Sensors
                </div>
                <div className="absolute -bottom-6 left-6 glass rounded-lg px-3 py-2 text-xs font-semibold text-[#37639C] border border-[#37639C]/20 whitespace-nowrap">
                  Upper Back
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPEC CARDS */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold">
              <span className="glow-text">Technical Specifications</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {SPECS.map((spec, i) => (
              <AnimatedSection key={spec.label} delay={i * 80}>
                <div className="glass rounded-xl p-6 text-center card-hover">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${spec.color}18`, color: spec.color }}
                  >
                    {spec.icon}
                  </div>
                  <div className="text-xl font-bold text-[#37639C] mb-1">{spec.value}</div>
                  <div className="text-sm font-medium text-[#585B60] mb-0.5">{spec.label}</div>
                  <div className="text-xs text-[#8B9299]">{spec.sub}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* REAL-TIME SENSOR DATA */}
      <section className="section-padding bg-[#F0F4F8] border-y border-[#37639C]/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="glow-text">Real-Time Sensor Data</span>
            </h2>
            <p className="text-[#585B60] text-lg max-w-2xl mx-auto">
              Five channels sampled simultaneously. Each signal stream feeds into the BiLSTM model as a distinct input feature for mood state deviation scoring.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SENSORS.map((sensor, i) => (
              <AnimatedSection key={sensor.id} delay={i * 80}>
                <SensorCard sensor={sensor} showDescription={true} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL RELEVANCE */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-4">
                <span className="glow-text">Clinical Relevance</span>
              </h2>
              <p className="text-[#585B60] leading-relaxed mb-8">
                Each sensor channel was selected based on peer-reviewed evidence linking physiological measurement to mood state in bipolar disorder. The combined signal profile enables detection of prodromal patterns before overt symptom onset.
              </p>
              <ul className="space-y-4">
                {CLINICAL_RELEVANCE.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#558AC4] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#585B60] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="glass rounded-2xl p-6 border border-[#37639C]/12">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm font-semibold text-[#37639C]">48-Hour Trend</div>
                    <div className="text-xs text-[#8B9299]">Patient PT-2847</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
                    <span className="text-xs text-emerald-600 font-medium">Live</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {SENSORS.map((sensor) => (
                    <div key={sensor.id}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-medium text-[#585B60]">{sensor.name}</span>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: sensor.colorHex }}
                        >
                          {sensor.valueDisplay} {sensor.unit}
                        </span>
                      </div>
                      <div className="h-2 bg-[#37639C]/[0.06] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${sensor.status === 'elevated' ? 72 : 55}%`,
                            background: `linear-gradient(90deg, ${sensor.colorHex}60, ${sensor.colorHex})`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[#37639C]/[0.08] flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 pulse-dot" />
                  <span className="text-xs text-orange-600 font-medium">
                    3 channels elevated above personalized baseline
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div
              className="rounded-3xl p-12 text-center"
              style={{
                background: 'linear-gradient(135deg, #37639C 0%, #558AC4 100%)',
                boxShadow: '0 20px 60px rgba(55,99,156,0.25)',
              }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                See NeuroPatch in Action
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Explore the live clinical dashboard or request a demonstration with your team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[#37639C] bg-white hover:bg-white/90 transition-all shadow-lg"
                >
                  View Live Dashboard
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-all"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
