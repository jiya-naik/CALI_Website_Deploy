'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Cpu, Activity, CheckCircle2, Download } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { useCounter } from '@/hooks/use-counter'
import { useInView } from '@/hooks/use-in-view'

const STATS = [
  {
    label: 'Bipolar Disorder Prevalence',
    value: 46,
    suffix: 'M+',
    decimals: 0,
    description: 'people globally living with bipolar disorder',
  },
  {
    label: 'US Market Size',
    value: 4.2,
    suffix: 'B',
    prefix: '$',
    decimals: 1,
    description: 'US psychiatric digital health market',
  },
  {
    label: 'Monitoring Gap',
    value: 85,
    suffix: '%',
    decimals: 0,
    description: 'of episodes not captured between appointments',
  },
  {
    label: 'Addressable Market',
    value: 1.2,
    suffix: 'B',
    prefix: '$',
    decimals: 1,
    description: 'serviceable addressable market for CALI',
  },
]

function StatCard({ stat }: { stat: typeof STATS[0] }) {
  const { ref, isInView } = useInView({ triggerOnce: true })
  const count = useCounter({
    target: stat.value,
    duration: 2000,
    start: isInView,
    decimals: stat.decimals,
  })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="glass rounded-xl p-6 text-center card-hover"
    >
      <div className="text-4xl font-black text-[#37639C] mb-2">
        {stat.prefix || ''}
        {stat.decimals > 0 ? count.toFixed(stat.decimals) : Math.floor(count)}
        {stat.suffix}
      </div>
      <div className="text-sm font-semibold text-[#585B60] mb-1">{stat.label}</div>
      <div className="text-xs text-[#8B9299]">{stat.description}</div>
    </div>
  )
}

const DIFFERENTIATORS = [
  {
    icon: <Activity className="w-6 h-6" />,
    color: '#558AC4',
    title: '5-Sensor Psychiatric-Specific Design',
    body: 'Unlike general wellness wearables, NeuroPatch integrates EDA, EMG, temperature, accelerometry, and cortisol in a single patch. This sensor profile was explicitly selected for bipolar disorder monitoring based on peer-reviewed physiological evidence.',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    color: '#37639C',
    title: 'On-Device BiLSTM Inference',
    body: 'The BiLSTM model runs on-device, enabling real-time prodromal detection without cloud round-trips. Patient data is processed locally, minimizing PHI exposure and reducing latency.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    color: '#16a34a',
    title: 'HIPAA-First Architecture',
    body: 'Privacy and security are architectural constraints, not afterthoughts. On-device preprocessing, encrypted BLE streaming, role-based access control, and PHI decoupling are built into every layer.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    color: '#c084fc',
    title: '24-27% CAGR Market',
    body: 'The digital mental health monitoring market is projected to grow at 24–27% CAGR through 2029, driven by clinician demand for objective biomarkers and payer interest in reducing inpatient costs.',
  },
]

const TEAM = [
  {
    name: 'Madhura Abhijit Joshi',
    title: 'Founder & CEO',
    bio: 'Leading CALI\'s mission to bring continuous physiological monitoring to psychiatric care. Driving product development, clinical strategy, and regulatory pathway for NeuroPatch.',
    initials: 'MJ',
    color: '#558AC4',
  },
]

const PHASES = [
  {
    phase: 'Prototype',
    date: '2023',
    status: 'completed',
    items: ['Hardware prototype built', '5-channel signal validated', 'BiLSTM architecture defined'],
  },
  {
    phase: 'Pilot Study',
    date: '2024-2025',
    status: 'current',
    items: ['Sensor validation in progress', 'BiLSTM model development in progress', 'Feasibility study protocol in development'],
  },
  {
    phase: 'Multi-Center Trial',
    date: '2025-2026',
    status: 'upcoming',
    items: ['Multi-site study across two institutions', 'IRB protocol submission', 'Data collection and analysis'],
  },
  {
    phase: 'FDA Submission',
    date: '2026-2027',
    status: 'upcoming',
    items: ['Type II medical device classification', 'Clinical data compilation', 'Regulatory counsel engaged'],
  },
  {
    phase: 'Commercial Launch',
    date: '2027',
    status: 'upcoming',
    items: ['Initial clinical partnerships', 'Reimbursement pathway', 'Scale manufacturing'],
  },
]

export default function InvestorsPage() {
  return (
    <div className="bg-white">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 dot-grid overflow-hidden">
        <div
          className="glow-orb w-[600px] h-[600px] top-[-100px] right-[-50px] opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(85,138,196,0.12) 0%, transparent 65%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#558AC4]/40 bg-[#558AC4]/10 mb-6">
              <TrendingUp className="w-3.5 h-3.5 text-[#558AC4]" />
              <span className="text-xs font-semibold text-[#558AC4] uppercase tracking-wider">
                Investor Information
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black leading-tight tracking-tight mb-6">
              <span className="glow-text">The Infrastructure</span>
              <br />
              <span className="text-[#585B60]">Layer for Psychiatry</span>
            </h1>
            <p className="text-xl text-[#585B60] leading-relaxed">
              CALI is building the first psychiatric-grade continuous monitoring platform —
              starting with bipolar disorder, the highest-acuity, most underserved diagnostic
              gap in mental health.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MARKET STATS ─── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="glow-text">Market Opportunity</span>
            </h2>
            <p className="text-[#585B60] text-lg max-w-xl mx-auto">
              A massive underserved market at the intersection of psychiatric care and
              digital health.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map((stat) => (
              <AnimatedSection key={stat.label}>
                <StatCard stat={stat} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIFFERENTIATORS ─── */}
      <section className="section-padding bg-[#F0F4F8] border-y border-[#37639C]/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="glow-text">Technology Differentiation</span>
            </h2>
            <p className="text-[#585B60] text-lg max-w-xl mx-auto">
              Four structural advantages that create durable defensibility.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {DIFFERENTIATORS.map((d, i) => (
              <AnimatedSection key={d.title} delay={i * 80}>
                <div className="glass rounded-xl p-6 card-hover h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${d.color}18`, color: d.color }}
                    >
                      {d.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#37639C] mb-2">{d.title}</h3>
                      <p className="text-sm text-[#585B60] leading-relaxed">{d.body}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="glow-text">Leadership</span>
            </h2>
          </AnimatedSection>

          <div className="flex justify-center">
            {TEAM.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 100} className="max-w-sm w-full">
                <div className="glass rounded-xl p-8 text-center card-hover">
                  {/* Avatar */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 border-2 text-xl font-bold"
                    style={{
                      borderColor: member.color,
                      background: `${member.color}15`,
                      color: member.color,
                    }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-bold text-[#37639C] mb-1">{member.name}</h3>
                  <div
                    className="text-sm font-medium mb-4"
                    style={{ color: member.color }}
                  >
                    {member.title}
                  </div>
                  <p className="text-sm text-[#585B60] leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INVESTMENT TIMELINE ─── */}
      <section className="section-padding bg-[#F0F4F8] border-y border-[#37639C]/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="glow-text">Development Timeline</span>
            </h2>
            <p className="text-[#585B60] text-lg max-w-xl mx-auto">
              Clear milestones from prototype to commercial launch.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PHASES.map((phase, i) => {
              const statusConfig: Record<string, { color: string; label: string }> = {
                completed: { color: '#16a34a', label: 'Completed' },
                current: { color: '#558AC4', label: 'In Progress' },
                upcoming: { color: '#8B9299', label: 'Upcoming' },
              }
              const config = statusConfig[phase.status]

              return (
                <AnimatedSection key={phase.phase} delay={i * 80}>
                  <div
                    className="glass rounded-xl p-5 h-full border-t-2"
                    style={{ borderTopColor: config.color }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: config.color }}
                      />
                      <span
                        className="text-xs font-semibold"
                        style={{ color: config.color }}
                      >
                        {config.label}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-[#37639C] mb-0.5">{phase.phase}</div>
                    <div className="text-xs text-[#8B9299] mb-4">{phase.date}</div>
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2
                            className="w-3.5 h-3.5 mt-0.5 shrink-0"
                            style={{
                              color: phase.status === 'completed' ? config.color : '#8B9299',
                            }}
                          />
                          <span className="text-xs text-[#585B60] leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div
              className="rounded-3xl p-12"
              style={{
                background: 'linear-gradient(135deg, #37639C 0%, #558AC4 100%)',
                boxShadow: '0 20px 60px rgba(55,99,156,0.25)',
              }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Request Investor Packet
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Get access to our full investor deck, technical documentation, and
                current funding terms. Contact Madhura directly or submit via our
                contact form.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[#37639C] bg-white hover:bg-white/90 transition-all shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  Request Investor Packet
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-all"
                >
                  Contact Founder
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
