import { useEffect, useState } from 'react'
import { SITE } from '../../content/site'

const CLOCK_INTERVAL_MS = 1000

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: SITE.timeZone,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

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
      <span className="text-soft">{SITE.clockLabel} </span>
      <strong className="text-ink font-semibold tabular-nums">{clock}</strong>
    </span>
  )
}
