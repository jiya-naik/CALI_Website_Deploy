import Link from 'next/link'
import { ArrowRight, Smartphone, Cpu, Monitor, Shield, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { SENSORS } from '@/lib/sensor-data'
import {
  Zap,
  Activity,
  Thermometer,
  Move,
  Droplets,
} from 'lucide-react'

const ICON_MAP: Record<string, React.ReactNode> = {
  zap: <Zap className="w-5 h-5" />,
  activity: <Activity className="w-5 h-5" />,
  thermometer: <Thermometer className="w-5 h-5" />,
  move: <Move className="w-5 h-5" />,
  droplets: <Droplets className="w-5 h-5" />,
}

const HOW_IT_WORKS = [
  {
    step: '01',
    icon: <Activity className="w-6 h-6" />,
    title: 'Device',
    description:
      'Cognipatch adheres to the upper back, continuously sampling five physiological channels. The flexible 2" x 11" patch operates passively during uncontrolled daily activity.',
    color: '#558AC4',
  },
  {
    step: '02',
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile App',
    description:
      'Raw sensor data streams via Bluetooth LE to the CALI companion app, which handles local preprocessing and on-device feature extraction before transmission.',
    color: '#37639C',
  },
  {
    step: '03',
    icon: <Cpu className="w-6 h-6" />,
    title: 'ML Engine',
    description:
      'A BiLSTM model processes time-series features derived from the five sensor streams, comparing rolling windows against each patient\'s individual physiological baseline to score deviations.',
    color: '#c084fc',
  },
  {
    step: '04',
    icon: <Monitor className="w-6 h-6" />,
    title: 'Clinician Portal',
    description:
      'Risk scores, baseline deviation metrics, and longitudinal signal trends are surfaced in a secure web portal with role-based access control and full audit logging.',
    color: '#16a34a',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-32 pb-20 dot-grid overflow-hidden">
        <div
          className="glow-orb w-[500px] h-[500px] top-[-80px] right-[-80px] opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(85,138,196,0.12) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#558AC4]/40 bg-[#558AC4]/10 mb-6">
              <span className="text-xs font-semibold text-[#558AC4] uppercase tracking-wider">
                About CALI
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black leading-tight tracking-tight mb-6">
              <span className="glow-text">Objective Data</span>
              <br />
              <span className="text-[#585B60]">for Psychiatric Care</span>
            </h1>
            <p className="text-xl text-[#585B60] leading-relaxed">
              CALI is building a continuous physiological monitoring system for psychiatric care, targeting bipolar disorder as the primary application. Current treatment relies on episodic clinical evaluations and subjective self-reporting. Cognipatch provides continuous sensor data to supplement these assessments with objective, longitudinal physiological records.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={0}>
              <div
                className="glass rounded-2xl p-8 h-full border border-[#37639C]/12"
                style={{
                  background: 'linear-gradient(135deg, rgba(85,138,196,0.06) 0%, rgba(240,244,248,0.8) 100%)',
                }}
              >
                <h2 className="text-2xl font-bold text-[#37639C] mb-4">Mission</h2>
                <p className="text-[#585B60] leading-relaxed">
                  To provide psychiatrists and their patients with continuous, objective physiological data for monitoring mood state. Bipolar disorder affects an estimated 46 million people globally. Most monitoring today relies on self-reported mood diaries and periodic clinical assessments. Cognipatch is designed to replace these snapshots with continuous physiological measurement.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div
                className="glass rounded-2xl p-8 h-full border border-[#37639C]/12"
                style={{
                  background: 'linear-gradient(135deg, rgba(55,99,156,0.06) 0%, rgba(240,244,248,0.8) 100%)',
                }}
              >
                <h2 className="text-2xl font-bold text-[#37639C] mb-4">Vision</h2>
                <p className="text-[#585B60] leading-relaxed">
                  Psychiatric care with the same physiological data density as cardiology. Cognipatch is the first step: a five-sensor wearable that provides clinicians with continuous telemetry rather than quarterly appointment snapshots. The system outputs risk scores, baseline deviation metrics, and temporal trends that are directly interpretable without clinical inference from incomplete self-reports.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-[#F0F4F8] border-y border-[#37639C]/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              <span className="glow-text">How It Works</span>
            </h2>
            <p className="text-[#585B60] text-lg max-w-xl mx-auto">
              Four integrated layers: device, mobile, ML engine, and clinician portal.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-[48px] left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-transparent via-[#558AC4]/30 to-transparent" />

            {HOW_IT_WORKS.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 100} className="h-full">
                <div className="glass rounded-xl p-6 text-center card-hover relative h-full">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 border-2"
                    style={{
                      borderColor: step.color,
                      background: `${step.color}18`,
                      color: step.color,
                    }}
                  >
                    {step.icon}
                  </div>
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-3 z-20">
                      <ChevronRight className="w-5 h-5 text-[#558AC4]/50" />
                    </div>
                  )}
                  <div className="text-xs font-bold text-[#8B9299] mb-1 tracking-wider">{step.step}</div>
                  <h3 className="text-base font-semibold text-[#37639C] mb-3">{step.title}</h3>
                  <p className="text-sm text-[#585B60] leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SENSOR TECHNOLOGY */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              <span className="glow-text">Sensor Technology</span>
            </h2>
            <p className="text-[#585B60] text-lg max-w-2xl mx-auto">
              Five channels selected for their validated clinical relevance to autonomic nervous system state and mood disorder monitoring.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SENSORS.map((sensor, i) => (
              <AnimatedSection key={sensor.id} delay={i * 80}>
                <div className="glass rounded-xl p-6 card-hover h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${sensor.colorHex}18`, color: sensor.colorHex }}
                    >
                      {ICON_MAP[sensor.icon]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#37639C] text-sm">{sensor.name}</h3>
                      <span className="text-xs text-[#8B9299]">{sensor.unit}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#585B60] leading-relaxed">{sensor.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HIPAA SECURITY */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div
              className="rounded-2xl p-10 border border-emerald-500/20"
              style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(240,244,248,0.9) 100%)',
              }}
            >
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 flex items-center justify-center border border-emerald-500/20">
                    <Shield className="w-7 h-7 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#37639C] mb-4">
                    HIPAA-First Architecture
                  </h2>
                  <p className="text-[#585B60] leading-relaxed mb-4">
                    Cognipatch is designed with PHI minimization as a first-class requirement. Raw physiological signals are preprocessed on-device. Only derived features are transmitted over encrypted Bluetooth LE to the companion app. The clinician portal enforces role-based access control, maintains a complete audit trail, and encrypts all data at rest and in transit.
                  </p>
                  <p className="text-[#585B60] leading-relaxed">
                    Patient identifiers are decoupled from physiological data at the storage layer. A breach of sensor data cannot be correlated with patient identity without a separate access-controlled key.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {['End-to-End Encryption', 'On-Device Processing', 'RBAC Portal', 'Audit Trails', 'PHI Decoupling'].map((badge) => (
                      <span
                        key={badge}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Link
              href="/device"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#558AC4] to-[#37639C] hover:opacity-90 transition-all shadow-lg shadow-[#558AC4]/25"
            >
              Explore the Device
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
