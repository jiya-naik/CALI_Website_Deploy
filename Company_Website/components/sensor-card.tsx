import { Sparkline } from './sparkline'
import { SensorData } from '@/lib/sensor-data'
import {
  HeartPulse,
  Zap,
  Activity,
  Thermometer,
  Move,
  Droplets,
} from 'lucide-react'
import { clsx } from 'clsx'

const ICONS: Record<string, React.ReactNode> = {
  'heart-pulse': <HeartPulse className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
  activity: <Activity className="w-5 h-5" />,
  thermometer: <Thermometer className="w-5 h-5" />,
  move: <Move className="w-5 h-5" />,
  droplets: <Droplets className="w-5 h-5" />,
}

interface SensorCardProps {
  sensor: SensorData
  showDescription?: boolean
  onClick?: () => void
  className?: string
}

export function SensorCard({
  sensor,
  showDescription = false,
  onClick,
  className,
}: SensorCardProps) {
  return (
    <div
      className={clsx(
        'glass rounded-xl p-5 card-hover cursor-default',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: `${sensor.colorHex}18`, color: sensor.colorHex }}
          >
            {ICONS[sensor.icon]}
          </div>
          <div>
            <div className="text-sm font-semibold text-[#37639C]">{sensor.name}</div>
            <div className="text-xs text-[#8B9299]">{sensor.unit}</div>
          </div>
        </div>
        <span
          className={clsx(
            'text-xs font-medium px-2 py-0.5 rounded-full',
            sensor.status === 'normal' ? 'status-normal' : 'status-elevated'
          )}
        >
          {sensor.status === 'normal' ? 'Normal' : 'Elevated'}
        </span>
      </div>

      {/* Value + sparkline */}
      <div className="flex items-end justify-between mb-3">
        <div>
          <span
            className="text-2xl font-bold"
            style={{ color: sensor.colorHex }}
          >
            {sensor.valueDisplay}
          </span>
          <span className="text-sm text-[#8B9299] ml-1">{sensor.unit}</span>
        </div>
        <Sparkline
          data={sensor.data}
          color={sensor.colorHex}
          spikeAt={sensor.spikeAt}
          width={100}
          height={36}
        />
      </div>

      {showDescription && (
        <p className="text-xs text-[#585B60] leading-relaxed border-t border-[#37639C]/10 pt-3 mt-1">
          {sensor.description}
        </p>
      )}
    </div>
  )
}
