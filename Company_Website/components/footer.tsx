import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Shield, Linkedin } from 'lucide-react'

const productLinks = [
  { href: '/device', label: 'NeuroPatch Device' },
  { href: '/dashboard', label: 'Clinician Dashboard' },
  { href: '/research', label: 'Research' },
  { href: '/about', label: 'How It Works' },
]

const companyLinks = [
  { href: '/about', label: 'About CALI' },
  { href: '/investors', label: 'Investors' },
  { href: '/contact', label: 'Contact' },
]

const legalLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'HIPAA Notice' },
]

export function Footer() {
  return (
    <footer className="bg-[#F0F4F8] border-t border-[#37639C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/cali-logo.png" alt="CALI logo" width={32} height={32} className="w-8 h-8 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-black tracking-widest glow-text uppercase">
                  CALI
                </span>
                <span className="text-[9px] text-[#8B9299] font-medium tracking-wider uppercase">
                  NeuroPatch
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#585B60] leading-relaxed max-w-xs mb-6">
              Precision psychiatric monitoring through continuous physiological sensing.
              Objective biomarkers for better clinical decisions.
            </p>

            {/* Contact */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm text-[#585B60]">
                <Phone className="w-3.5 h-3.5 text-[#558AC4] shrink-0" />
                <span>714-213-3024</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#585B60]">
                <Mail className="w-3.5 h-3.5 text-[#558AC4] shrink-0" />
                <span>Madhura Abhijit Joshi</span>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-5 px-3 py-2 rounded-lg bg-[#558AC4]/[0.07] border border-[#558AC4]/20 text-sm text-[#585B60] hover:text-[#37639C] hover:border-[#558AC4]/35 transition-all"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-[#8B9299] uppercase tracking-widest mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#585B60] hover:text-[#37639C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-[#8B9299] uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#585B60] hover:text-[#37639C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-[#8B9299] uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#585B60] hover:text-[#37639C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* HIPAA Badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-medium text-emerald-700">HIPAA Compliant</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#37639C]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8B9299]">
            © 2026 CALI Health. All rights reserved.
          </p>
          <p className="text-xs text-[#8B9299] flex items-center gap-1.5">
            <Shield className="w-3 h-3" />
            HIPAA-compliant architecture. Not a medical device. For research purposes.
          </p>
        </div>
      </div>
    </footer>
  )
}
