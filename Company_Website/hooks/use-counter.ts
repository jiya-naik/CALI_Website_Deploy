'use client'

import { useEffect, useState } from 'react'

interface UseCounterOptions {
  target: number
  duration?: number
  start?: boolean
  decimals?: number
}

export function useCounter({
  target,
  duration = 2000,
  start = true,
  decimals = 0,
}: UseCounterOptions) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = startValue + (target - startValue) * eased

      setCount(parseFloat(current.toFixed(decimals)))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [target, duration, start, decimals])

  return count
}
