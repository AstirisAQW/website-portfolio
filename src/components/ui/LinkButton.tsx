import type { MouseEventHandler, ReactNode, Ref } from 'react'

export type LinkButtonVariant = 'primary' | 'outline' | 'icon'

interface LinkButtonProps {
  variant: LinkButtonVariant
  href: string
  children: ReactNode
  external?: boolean
  download?: string
  ariaLabel?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  className?: string
  ref?: Ref<HTMLAnchorElement>
}

const VARIANT_CLASSES: Record<LinkButtonVariant, string> = {
  primary:
    'inline-flex items-center gap-[0.6rem] py-[0.65rem] px-5 border border-accent rounded-btn font-display font-medium text-[0.95rem] bg-accent text-panel hover:bg-accent-hover hover:border-accent-hover transition-colors no-underline will-change-transform',
  outline:
    'inline-flex items-center gap-[0.6rem] py-[0.65rem] px-5 border border-line rounded-btn font-display font-medium text-[0.95rem] bg-panel text-ink hover:border-ink transition-colors no-underline will-change-transform',
  icon: 'w-[44px] h-[44px] inline-flex items-center justify-center bg-panel border border-line rounded-btn text-ink hover:border-ink transition-colors will-change-transform',
}

export function LinkButton({
  variant,
  href,
  children,
  external,
  download,
  ariaLabel,
  onClick,
  className,
  ref,
}: LinkButtonProps) {
  const baseClasses = VARIANT_CLASSES[variant]
  const classes = className ? `${baseClasses} ${className}` : baseClasses

  return (
    <a
      ref={ref}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      download={download}
      aria-label={ariaLabel}
      onClick={onClick}
      className={classes}
    >
      {children}
    </a>
  )
}
