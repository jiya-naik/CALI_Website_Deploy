'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { clsx } from 'clsx'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/device', label: 'Device' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/research', label: 'Research' },
  { href: '/investors', label: 'Investors' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-[#37639C]/10 shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image src="/cali-logo.png" alt="CALI logo" width={44} height={44} className="w-11 h-11 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-black tracking-widest glow-text uppercase">
                  CALI
                </span>
                <span className="text-[9px] text-[#8B9299] font-medium tracking-wider uppercase">
                  NeuroPatch
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'px-3 py-2 text-sm font-medium rounded-md transition-all duration-200',
                    pathname === link.href
                      ? 'text-[#558AC4] bg-[#558AC4]/10'
                      : 'text-[#585B60] hover:text-[#37639C] hover:bg-[#558AC4]/[0.06]'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#558AC4] to-[#37639C] text-white hover:opacity-90 transition-all duration-200 shadow-md shadow-[#558AC4]/20"
              >
                Request Demo
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-md text-[#585B60] hover:text-[#37639C] hover:bg-[#558AC4]/[0.06] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'fixed inset-0 z-40 md:hidden transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-[#37639C]/10 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={clsx(
            'absolute top-16 left-0 right-0 bg-white border-b border-[#37639C]/10 shadow-lg transition-all duration-300',
            mobileOpen ? 'translate-y-0' : '-translate-y-4'
          )}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200',
                  pathname === link.href
                    ? 'text-[#558AC4] bg-[#558AC4]/10'
                    : 'text-[#585B60] hover:text-[#37639C] hover:bg-[#558AC4]/[0.06]'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#558AC4] to-[#37639C] text-white"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
