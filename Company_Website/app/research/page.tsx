import Link from 'next/link'
import { ArrowRight, ExternalLink, CheckCircle2, BookOpen, Users, FlaskConical } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'

const PAPERS = [
  {
    authors: 'Valenza et al.',
    year: '2014',
    journal: 'IEEE Journal of Biomedical and Health Informatics',
    title:
      'Wearable Monitoring for Mood Recognition in Bipolar Disorder Based on History-Dependent Long-Term Heart Rate Variability Analysis',
    relevance:
      'Demonstrates that continuous wearable physiological monitoring can distinguish manic, depressive, and euthymic states in bipolar patients. Foundational evidence for longitudinal, passive monitoring as a viable approach to mood state classification.',
    url: 'https://ieeexplore.ieee.org/document/6661378/',
    color: '#558AC4',
  },
  {
    authors: 'Kim et al.',
    year: '2018',
    journal: 'Psychiatry Investigation',
    title: 'Stress and Heart Rate Variability: A Meta-Analysis and Review of the Literature',
    relevance:
      'Meta-analysis of 34 studies confirming inverse correlation between psychological stress and autonomic nervous system measures, supporting physiological biomarkers as reliable indicators of stress state relevant to mood episode monitoring.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29486547/',
    color: '#37639C',
  },
  {
    authors: 'Klimek et al.',
    year: '2023',
    journal: 'Acta Neuropsychiatrica',
    title:
      'Wearables Measuring Electrodermal Activity to Assess Perceived Stress in Care: A Scoping Review',
    relevance:
      'Scoping review of EDA wearables in clinical care settings, validating skin conductance as a real-world measure of sympathetic arousal. Directly informs NeuroPatch EDA channel design and signal interpretation approach.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/36960675/',
    color: '#c084fc',
  },
  {
    authors: 'Schmidt et al.',
    year: '2018',
    journal: 'ICMI 2018',
    title: 'Introducing WESAD, a Multimodal Dataset for Wearable Stress and Affect Detection',
    relevance:
      'Introduces the WESAD multimodal dataset used in BiLSTM model development. Demonstrates that combined EDA, EMG, temperature, and accelerometer signals significantly outperform single-channel approaches for affect state classification.',
    url: 'https://dl.acm.org/doi/10.1145/3242969.3242985',
    color: '#fb923c',
  },
]

const TIMELINE = [
  {
    phase: 'Phase 1',
    title: 'Sensor Validation',
    date: '2024',
    status: 'current',
    description:
      'Validating signal quality, electrode placement, and clinical-grade SNR across all five sensor channels on the NeuroPatch prototype.',
  },
  {
    phase: 'Phase 2',
    title: 'BiLSTM Development',
    date: '2024',
    status: 'current',
    description:
      'Developing and tuning the BiLSTM mood episode detection model using WESAD and published physiological datasets.',
  },
  {
    phase: 'Phase 3',
    title: 'Feasibility Study',
    date: '2024-2025',
    status: 'current',
    description:
      'Feasibility study protocol in development for bipolar I and II participants. Collaborating psychiatric institution identified. IRB engagement in progress.',
  },
  {
    phase: 'Phase 4',
    title: 'Multi-Site Study',
    date: '2025-2026',
    status: 'upcoming',
    description:
      'Multi-site clinical study across two psychiatric institutions following feasibility study completion. Protocol and IRB submission planned.',
  },
  {
    phase: 'Phase 5',
    title: 'Regulatory Submission',
    date: '2026-2027',
    status: 'upcoming',
    description:
      'Type II medical device classification submission following completion of clinical studies and compilation of safety and efficacy data.',
  },
]

const OUTCOMES = [
  'Sweat-based cortisol electrochemical sensing correlates with serum cortisol during psychological stress, supporting its use as a continuous HPA axis proxy in wearable form factors',
  'Combined EDA and EMG co-elevation is associated with manic prodrome onset in published bipolar physiological monitoring studies',
  'Multimodal sensor fusion consistently outperforms single-channel approaches for affect state classification across published wearable datasets',
  'EDA measurements from body-worn sensors show reliable sympathetic arousal tracking at clinically relevant timescales during naturalistic daily activity',
  'BiLSTM architectures trained on individual patient baselines reduce false positive rates compared to population-level threshold approaches',
]

export default function ResearchPage() {
  return (
    <div className="bg-white">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 dot-grid overflow-hidden">
        <div
          className="glow-orb w-[600px] h-[600px] top-[-100px] left-[30%] opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(85,138,196,0.12) 0%, transparent 65%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#558AC4]/40 bg-[#558AC4]/10 mb-6">
              <BookOpen className="w-3.5 h-3.5 text-[#558AC4]" />
              <span className="text-xs font-semibold text-[#558AC4] uppercase tracking-wider">
                Scientific Foundation
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black leading-tight tracking-tight mb-6">
              <span className="glow-text">Evidence-Based</span>
              <br />
              <span className="text-[#585B60]">by Design</span>
            </h1>
            <p className="text-xl text-[#585B60] leading-relaxed">
              Every sensor channel, every ML feature, and every clinical claim is grounded in
              peer-reviewed literature. Here is the research that underpins NeuroPatch.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SUPPORTING RESEARCH ─── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2 className="text-4xl font-bold mb-2">
              <span className="glow-text">Supporting Literature</span>
            </h2>
            <p className="text-[#585B60]">
              Key peer-reviewed papers informing the NeuroPatch sensor selection and ML architecture.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {PAPERS.map((paper, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-6 card-hover block h-full group border border-[#37639C]/12"
                >
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded"
                        style={{ background: `${paper.color}18`, color: paper.color }}
                      >
                        {paper.year}
                      </span>
                      <span className="text-xs text-[#8B9299]">{paper.authors}</span>
                    </div>
                    <ExternalLink
                      className="w-4 h-4 text-[#8B9299] group-hover:text-[#558AC4] transition-colors"
                    />
                  </div>

                  <div className="text-xs font-medium text-[#8B9299] mb-2 uppercase tracking-wider">
                    {paper.journal}
                  </div>

                  <h3 className="text-sm font-semibold text-[#37639C] leading-snug mb-3">
                    {paper.title}
                  </h3>

                  <p className="text-xs text-[#585B60] leading-relaxed border-t border-[#37639C]/[0.08] pt-3">
                    <span className="text-[#8B9299] font-medium">Relevance: </span>
                    {paper.relevance}
                  </p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLINICAL OUTCOMES ─── */}
      <section className="section-padding bg-[#F0F4F8] border-y border-[#37639C]/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-4">
                <span className="glow-text">Key Findings</span>
              </h2>
              <p className="text-[#585B60] mb-8 leading-relaxed">
                Aggregate evidence from the research literature supporting the physiological
                biomarker approach to bipolar disorder monitoring.
              </p>
              <ul className="space-y-4">
                {OUTCOMES.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#558AC4] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#585B60] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Join Research Network */}
            <AnimatedSection delay={120}>
              <div
                className="rounded-2xl p-8 border border-[#558AC4]/20"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(85,138,196,0.06) 0%, rgba(240,244,248,0.8) 100%)',
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#558AC4]/15 flex items-center justify-center mb-5 border border-[#558AC4]/20">
                  <Users className="w-6 h-6 text-[#558AC4]" />
                </div>
                <h3 className="text-xl font-bold text-[#37639C] mb-3">
                  Join Our Research Network
                </h3>
                <p className="text-sm text-[#585B60] leading-relaxed mb-6">
                  We are actively seeking psychiatric research institutions, academic medical
                  centers, and clinical investigators interested in physiological monitoring
                  for bipolar disorder. Collaborations for protocol development and
                  multi-site study participation welcome.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-[#558AC4] to-[#37639C] text-sm hover:opacity-90 transition-all"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="glass rounded-xl p-5 border border-[#37639C]/12 mt-4">
                <div className="flex items-center gap-3 mb-3">
                  <FlaskConical className="w-5 h-5 text-[#37639C]" />
                  <span className="text-sm font-semibold text-[#37639C]">Study Status</span>
                </div>
                <p className="text-xs text-[#585B60] leading-relaxed">
                  Multi-site clinical study currently in planning phase. IRB protocol under
                  preparation. Target participant population: adults with confirmed DSM-5
                  bipolar I or II diagnosis, currently under psychiatric care.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              <span className="glow-text">Research Timeline</span>
            </h2>
            <p className="text-[#585B60] text-lg max-w-xl mx-auto">
              Our structured path from sensor validation to regulatory submission.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#558AC4]/40 via-[#37639C]/20 to-transparent" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => {
                const isLeft = i % 2 === 0
                const statusColors: Record<string, string> = {
                  completed: '#16a34a',
                  current: '#558AC4',
                  upcoming: '#8B9299',
                }
                const color = statusColors[item.status]

                return (
                  <AnimatedSection key={i} delay={i * 100}>
                    <div
                      className={`flex items-center gap-6 sm:gap-0 ${
                        isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                      }`}
                    >
                      {/* Card */}
                      <div
                        className={`flex-1 ml-14 sm:ml-0 ${
                          isLeft ? 'sm:pr-12' : 'sm:pl-12'
                        }`}
                      >
                        <div className="glass rounded-xl p-5 card-hover border border-[#37639C]/12">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded"
                              style={{ background: `${color}18`, color }}
                            >
                              {item.phase}
                            </span>
                            <span
                              className="text-xs font-medium px-2 py-0.5 rounded-full capitalize"
                              style={{
                                background: `${color}15`,
                                color,
                                border: `1px solid ${color}30`,
                              }}
                            >
                              {item.status}
                            </span>
                          </div>
                          <h3 className="font-semibold text-[#37639C] mb-1">{item.title}</h3>
                          <div className="text-xs text-[#8B9299] mb-2">{item.date}</div>
                          <p className="text-sm text-[#585B60] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Center dot */}
                      <div
                        className="absolute left-6 sm:static sm:w-4 sm:h-4 w-4 h-4 rounded-full border-2 z-10 sm:shrink-0"
                        style={{
                          borderColor: color,
                          background: `${color}30`,
                          boxShadow: item.status === 'current' ? `0 0 12px ${color}` : 'none',
                        }}
                      />

                      {/* Spacer for opposite side */}
                      <div className="hidden sm:block flex-1" />
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
