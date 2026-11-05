import { useEffect, useState } from 'react'
import { getClockLabel, SITE } from '../../content/site'

const CLOCK_INTERVAL_MS = 1000

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: SITE.hero.timeZone,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

const clockLabel = getClockLabel(SITE.hero.timeZone)

export function LiveClock() {
  const [clock, setClock] = useState<string>(() => timeFormatter.format(new Date()))

  useEffect(() => {
    const id = window.setInterval(() => {
      setClock(timeFormatter.format(new Date()))
    }, CLOCK_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [])

  return (
    <span className="hidden desk:inline whitespace-nowrap" aria-hidden="true">
      <span className="text-soft">{clockLabel} </span>
      <strong className="text-ink font-semibold tabular-nums">{clock}</strong>
    </span>
  )
}
