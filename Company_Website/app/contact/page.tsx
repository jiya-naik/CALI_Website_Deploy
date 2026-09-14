'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, ChevronDown, ChevronUp, CheckCircle2, Send } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'

const FAQS = [
  {
    q: 'Is NeuroPatch currently FDA-cleared?',
    a: 'NeuroPatch is a research-stage device. We are pursuing the FDA De Novo pathway following completion of our planned clinical study. The device is not yet cleared or approved for clinical use. All current use is research-only.',
  },
  {
    q: 'Are you currently enrolling clinical study participants?',
    a: 'Our multi-site clinical study is currently in the planning phase. IRB protocol is under preparation. If you represent a psychiatric research institution interested in participating, please contact us.',
  },
  {
    q: 'How does NeuroPatch handle patient privacy?',
    a: 'NeuroPatch uses on-device preprocessing to minimize PHI exposure. Only derived features — not raw sensor data — are transmitted. The platform uses encrypted BLE, role-based access control, and full audit logging. Architecture is HIPAA-compliant by design.',
  },
  {
    q: 'What types of partnerships is CALI seeking?',
    a: 'We are actively seeking academic medical centers and psychiatric research institutions for clinical study collaboration, as well as investors interested in the digital mental health monitoring space. We are also open to discussions with psychiatry-focused health systems.',
  },
  {
    q: 'What is the current stage of the company?',
    a: 'CALI is at the prototype/early clinical stage. Hardware prototype is complete, the BiLSTM model architecture is developed, and we are preparing for multi-site clinical studies. We are raising to fund clinical validation and regulatory submission.',
  },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    subject: 'Demo Request',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submit
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitted(true)
    setLoading(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="bg-white">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-16 dot-grid overflow-hidden">
        <div
          className="glow-orb w-[500px] h-[500px] top-[-80px] left-[30%] opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(85,138,196,0.12) 0%, transparent 65%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#558AC4]/40 bg-[#558AC4]/10 mb-6">
            <span className="text-xs font-semibold text-[#558AC4] uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black leading-tight tracking-tight mb-6">
            <span className="glow-text">Let&apos;s Talk</span>
          </h1>
          <p className="text-xl text-[#585B60] max-w-2xl mx-auto">
            Whether you&apos;re a clinician, researcher, investor, or potential partner —
            we want to hear from you. Reach out to Madhura directly or use the form below.
          </p>
        </div>
      </section>

      {/* ─── SPLIT LAYOUT ─── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="glass rounded-2xl p-8 border border-[#37639C]/12">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-5 border border-emerald-500/20">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#37639C] mb-3">Message Received</h3>
                    <p className="text-[#585B60] text-sm leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. Madhura will respond within 1–2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-xl font-bold text-[#37639C] mb-1">Send a Message</h2>
                      <p className="text-sm text-[#8B9299]">
                        All fields marked * are required.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-[#585B60] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl bg-[#F0F4F8] border border-[#37639C]/15 text-[#37639C] text-sm placeholder-[#8B9299] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#585B60] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@hospital.org"
                          className="w-full px-4 py-3 rounded-xl bg-[#F0F4F8] border border-[#37639C]/15 text-[#37639C] text-sm placeholder-[#8B9299] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#585B60] mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        placeholder="University Medical Center, Fund Name, etc."
                        className="w-full px-4 py-3 rounded-xl bg-[#F0F4F8] border border-[#37639C]/15 text-[#37639C] text-sm placeholder-[#8B9299] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#585B60] mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#F0F4F8] border border-[#37639C]/15 text-[#37639C] text-sm transition-all"
                      >
                        <option>Demo Request</option>
                        <option>Research Collaboration</option>
                        <option>Investor Inquiry</option>
                        <option>Clinical Partnership</option>
                        <option>Press / Media</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#585B60] mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your interest in CALI / NeuroPatch..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F0F4F8] border border-[#37639C]/15 text-[#37639C] text-sm placeholder-[#8B9299] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#558AC4] to-[#37639C] hover:opacity-90 transition-all shadow-lg shadow-[#558AC4]/20 disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={150} className="lg:col-span-2">
              <div className="space-y-5">
                {/* Direct Contact */}
                <div className="glass rounded-xl p-6 border border-[#37639C]/12">
                  <h3 className="text-sm font-semibold text-[#37639C] mb-5">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#558AC4]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Mail className="w-4 h-4 text-[#558AC4]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#8B9299] mb-0.5">Founder & CEO</div>
                        <div className="text-sm font-medium text-[#37639C]">
                          Madhura Abhijit Joshi
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#558AC4]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="w-4 h-4 text-[#558AC4]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#8B9299] mb-0.5">Phone</div>
                        <div className="text-sm font-medium text-[#37639C]">714-213-3024</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#558AC4]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-[#558AC4]" />
                      </div>
                      <div>
                        <div className="text-xs text-[#8B9299] mb-0.5">Location</div>
                        <div className="text-sm font-medium text-[#37639C]">California, USA</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response time */}
                <div className="glass rounded-xl p-5 border border-[#37639C]/12">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
                    <span className="text-xs font-semibold text-emerald-600">Actively Responding</span>
                  </div>
                  <p className="text-xs text-[#585B60] leading-relaxed">
                    Typical response time: 1–2 business days. Investor and research
                    collaboration inquiries receive priority response.
                  </p>
                </div>

                {/* Research note */}
                <div className="glass rounded-xl p-5 border border-[#37639C]/12 bg-[#558AC4]/[0.03]">
                  <h4 className="text-xs font-semibold text-[#585B60] mb-2 uppercase tracking-wider">
                    Research Collaborations
                  </h4>
                  <p className="text-xs text-[#585B60] leading-relaxed">
                    Psychiatric research institutions and academic medical centers interested in
                    collaborating on the planned multi-site clinical study are especially encouraged
                    to reach out.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-padding bg-[#F0F4F8] border-t border-[#37639C]/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="glow-text">Frequently Asked Questions</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="glass rounded-xl border border-[#37639C]/12 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-[#37639C] pr-4">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-4 h-4 text-[#558AC4] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#8B9299] shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 border-t border-[#37639C]/[0.08]">
                      <p className="text-sm text-[#585B60] leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
