import type { ReactNode, Ref } from 'react'

type CardElement = 'header' | 'div' | 'section'

interface CardProps {
  as?: CardElement
  id?: string
  className?: string
  ref?: Ref<HTMLElement>
  children: ReactNode
}

const BASE_CLASSES =
  'p-pad-sm desk:p-pad bg-panel border border-line rounded-panel-sm desk:rounded-panel'

export function Card({ as: Tag = 'div', id, className, ref, children }: CardProps) {
  const classes = className ? `${BASE_CLASSES} ${className}` : BASE_CLASSES

  return (
    <Tag ref={ref as never} id={id} className={classes}>
      {children}
    </Tag>
  )
}
