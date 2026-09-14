'use client'

interface SparklineProps {
  data: number[]
  color: string
  width?: number
  height?: number
  spikeAt?: number | number[]
}

export function Sparkline({ data, color, width = 120, height = 40, spikeAt }: SparklineProps) {
  if (!data || data.length === 0) return null

  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1

  const padding = 4
  const innerWidth = width - padding * 2
  const innerHeight = height - padding * 2

  const points = data.map((val, i) => {
    const x = padding + (i / (data.length - 1)) * innerWidth
    const y = padding + innerHeight - ((val - min) / range) * innerHeight
    return `${x},${y}`
  })

  const pointsStr = points.join(' ')

  const spikeIndices = Array.isArray(spikeAt) ? spikeAt : spikeAt !== undefined ? [spikeAt] : []

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Area fill */}
      <defs>
        <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={`${padding},${height - padding} ${pointsStr} ${width - padding},${height - padding}`}
        fill={`url(#grad-${color.replace('#', '')})`}
        stroke="none"
      />
      {/* Line */}
      <polyline
        points={pointsStr}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Spike markers */}
      {spikeIndices.map((idx) => {
        const pt = points[idx]
        if (!pt) return null
        const [x, y] = pt.split(',').map(Number)
        return (
          <circle
            key={idx}
            cx={x}
            cy={y}
            r="2.5"
            fill={color}
            opacity="0.9"
          />
        )
      })}
      {/* Last point dot */}
      {(() => {
        const lastPt = points[points.length - 1]
        const [x, y] = lastPt.split(',').map(Number)
        return <circle cx={x} cy={y} r="2" fill={color} />
      })()}
    </svg>
  )
}
