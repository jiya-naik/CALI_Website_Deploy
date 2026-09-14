import Link from 'next/link'
import { ArrowRight, Brain, Shield, Activity, LineChart, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { SensorCard } from '@/components/sensor-card'
import { SENSORS } from '@/lib/sensor-data'

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden dot-grid">
        <div
          className="glow-orb w-[600px] h-[600px] top-[-100px] left-[-100px] opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(85,138,196,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="glow-orb w-[400px] h-[400px] bottom-[-50px] right-[10%] opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(55,99,156,0.10) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <Link href="/device" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#558AC4]/40 bg-[#558AC4]/10 mb-8 hover:bg-[#558AC4]/20 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#558AC4] pulse-dot" />
                <span className="text-xs font-semibold text-[#558AC4] tracking-wide uppercase">
                  Introducing NeuroPatch
                </span>
                <ChevronRight className="w-3 h-3 text-[#558AC4]" />
              </Link>

              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.04] tracking-tight mb-6">
                <span className="glow-text block">See What</span>
                <span className="glow-text block">Observation</span>
                <span
                  className="block"
                  style={{
                    background: 'linear-gradient(135deg, #585B60 0%, #8B9299 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Alone Can&apos;t.
                </span>
              </h1>

              <p className="text-lg text-[#585B60] leading-relaxed max-w-lg mb-8">
                NeuroPatch continuously captures five physiological signals from a flexible patch worn on the upper back, providing clinicians with objective sensor data for continuous bipolar disorder monitoring and mood state detection.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#558AC4] to-[#37639C] hover:opacity-90 transition-all shadow-lg shadow-[#558AC4]/25 hover:shadow-[#558AC4]/40 hover:-translate-y-0.5"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#585B60] border border-[#37639C]/20 hover:text-[#37639C] hover:border-[#37639C]/40 transition-all hover:bg-[#558AC4]/[0.04]"
                >
                  View Research
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-[#37639C]/10">
                {[
                  { label: 'Physiological Signals', value: '5' },
                  { label: 'Battery Life', value: '2-4 wk' },
                  { label: 'Data Streams', value: 'Continuous' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl font-bold text-[#37639C]">{stat.value}</div>
                    <div className="text-xs text-[#8B9299]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sensor Visual */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 50%, rgba(85,138,196,0.06) 0%, transparent 70%)',
                }}
              />

              <div className="relative w-full max-w-md">
                <div className="glass rounded-2xl p-6 border border-[#37639C]/12">
                  <div className="flex items-center justify-end mb-4">
                    <span className="text-xs text-[#8B9299] font-mono">PT-2847</span>
                  </div>

                  {/* EDA waveform */}
                  <div className="relative bg-[#EEF3FA] rounded-xl p-4 mb-4 overflow-hidden">
                    <svg
                      viewBox="0 0 480 80"
                      className="w-full h-16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0,40 L30,40 L40,40 L45,20 L50,60 L55,10 L60,70 L65,40 L80,40 L90,40 L95,30 L100,50 L105,40 L120,40 L130,40 L135,20 L140,60 L145,10 L150,70 L155,40 L170,40 L180,40 L185,30 L190,50 L195,40 L210,40 L220,40 L225,20 L230,60 L235,10 L240,70 L245,40 L260,40 L270,40 L275,30 L280,50 L285,40 L300,40 L310,40 L315,20 L320,60 L325,10 L330,70 L335,40 L350,40 L360,40 L365,30 L370,50 L375,40 L400,40 L410,40 L415,20 L420,60 L425,10 L430,70 L435,40 L460,40 L480,40"
                        stroke="#558AC4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ecg-line"
                        style={{ strokeDasharray: 1200, strokeDashoffset: 1200, animation: 'ecg-draw 3s linear infinite' }}
                      />
                      <line x1="0" y1="40" x2="480" y2="40" stroke="rgba(55,99,156,0.08)" strokeWidth="1" />
                    </svg>
                    <div
                      className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#558AC4]/30 to-transparent"
                      style={{ left: '70%' }}
                    />
                  </div>

                  {/* Sensor chips: 5 sensors */}
                  <div className="grid grid-cols-5 gap-1.5">
                    {[
                      { label: 'EDA', value: '4.2 μS', color: '#22d3ee' },
                      { label: 'EMG', value: '18.3 μV', color: '#c084fc' },
                      { label: 'Temp', value: '36.8 °C', color: '#fb923c' },
                      { label: 'Accel', value: '0.12 g', color: '#4ade80' },
                      { label: 'Cortisol', value: '12.4', color: '#f87171' },
                    ].map((chip) => (
                      <div
                        key={chip.label}
                        className="bg-[#558AC4]/[0.06] rounded-lg px-1 py-2 text-center border border-[#558AC4]/[0.12]"
                      >
                        <div
                          className="text-[9px] font-bold leading-tight"
                          style={{ color: chip.color }}
                        >
                          {chip.value}
                        </div>
                        <div className="text-[8px] text-[#8B9299] mt-0.5">{chip.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge: risk alert */}
                <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 border border-orange-400/30 bg-orange-50 animate-float shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400 pulse-dot" />
                    <span className="text-xs font-semibold text-orange-600">Risk Alert</span>
                  </div>
                  <div className="text-[10px] text-[#585B60] mt-0.5">EDA elevated +17%</div>
                </div>

                {/* Floating badge: device status */}
                <div className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 border border-emerald-400/30 bg-emerald-50 animate-float shadow-md" style={{ animationDelay: '1.5s' }}>
                  <div className="text-xs font-semibold text-emerald-700">Device Online</div>
                  <div className="text-[10px] text-[#585B60] mt-0.5">Last sync: 2s ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SENSOR GRID */}
      <section className="section-padding relative bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#558AC4]/10 border border-[#558AC4]/20 mb-4">
              <span className="text-xs font-semibold text-[#558AC4] uppercase tracking-wider">
                Multimodal Sensing
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="glow-text">Five Signals.</span>{' '}
              <span className="text-[#585B60]">One Patch.</span>
            </h2>
            <p className="text-[#585B60] text-lg max-w-2xl mx-auto">
              NeuroPatch simultaneously captures five physiological signals: EDA, EMG, skin temperature, accelerometry, and cortisol. These streams are processed by a BiLSTM model to detect deviations from each patient&apos;s individual baseline.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SENSORS.map((sensor, i) => (
              <AnimatedSection key={sensor.id} delay={i * 80}>
                <SensorCard sensor={sensor} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR CLINICAL REALITY */}
      <section className="section-padding bg-white border-y border-[#37639C]/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              <span className="glow-text">Built for Clinical</span>{' '}
              <span className="text-[#585B60]">Reality</span>
            </h2>
            <p className="text-[#585B60] text-lg max-w-xl mx-auto">
              Current bipolar disorder management relies on episodic clinical assessments and self-reported mood diaries. NeuroPatch provides continuous physiological data to supplement these evaluations with objective, longitudinal signal records.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                color: '#558AC4',
                title: 'Continuous Passive Monitoring',
                body: 'NeuroPatch samples five physiological channels 24/7 without patient interaction. Data is collected during uncontrolled daily activity, eliminating the gaps inherent to episodic clinical evaluations and self-reported diaries.',
              },
              {
                icon: <Activity className="w-6 h-6" />,
                color: '#37639C',
                title: 'Personalized Baseline Modeling',
                body: 'The BiLSTM model builds a rolling physiological baseline per patient from historical sensor data. Deviation scores are computed relative to each patient\'s own baseline, not population-level thresholds.',
              },
              {
                icon: <LineChart className="w-6 h-6" />,
                color: '#6d88b8',
                title: 'Defined Clinical Outputs',
                body: 'The system produces risk scores, baseline deviation metrics, and temporal signal trends. Each output is tied directly to specific sensor inputs and surfaced through a structured clinician portal.',
              },
              {
                icon: <Shield className="w-6 h-6" />,
                color: '#16a34a',
                title: 'HIPAA-First Architecture',
                body: 'On-device preprocessing limits PHI exposure to derived signal features only. Bluetooth LE transmission is encrypted. The portal enforces role-based access, audit logging, and PHI decoupling at every layer.',
              },
            ].map((prop, i) => (
              <AnimatedSection key={prop.title} delay={i * 100}>
                <div className="glass rounded-xl p-6 h-full card-hover">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${prop.color}15`, color: prop.color }}
                  >
                    {prop.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[#37639C] mb-2">{prop.title}</h3>
                  <p className="text-sm text-[#585B60] leading-relaxed">{prop.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div
              className="relative rounded-3xl overflow-hidden p-12 text-center"
              style={{
                background: 'linear-gradient(135deg, #37639C 0%, #558AC4 100%)',
                boxShadow: '0 20px 60px rgba(55,99,156,0.25)',
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />

              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  Ready to Learn More
                  <br />
                  <span className="text-white/80">About NeuroPatch?</span>
                </h2>
                <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
                  Connect with our team to discuss the system architecture, sensor specifications, or research collaboration opportunities.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[#37639C] bg-white hover:bg-white/90 transition-all shadow-lg"
                  >
                    Request a Demo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/research"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-all"
                  >
                    View Research
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
