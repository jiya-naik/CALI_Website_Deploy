import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'CALI — NeuroPatch Psychiatric Wearable',
  description:
    "CALI's NeuroPatch continuously captures six physiological signals, giving clinicians objective biomarker data to detect mood episodes in bipolar disorder before they escalate.",
  keywords: [
    'bipolar disorder',
    'psychiatric wearable',
    'biomarkers',
    'NeuroPatch',
    'mental health technology',
    'CALI Health',
    'mood monitoring',
    'HRV',
    'EDA',
  ],
  authors: [{ name: 'CALI Health' }],
  openGraph: {
    title: 'CALI — NeuroPatch Psychiatric Wearable',
    description:
      'Continuous physiological monitoring for bipolar disorder. Six sensors. One patch.',
    type: 'website',
    siteName: 'CALI Health',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CALI — NeuroPatch',
    description: 'Precision psychiatric monitoring for bipolar disorder.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#050B18] text-[#F1F5F9] font-inter antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
