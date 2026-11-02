export function SubHeading({ children }: { children: string }) {
  return (
    <h2 className="text-ink border-line border-b pb-2 text-xl font-bold tracking-wider uppercase">
      {children}
    </h2>
  )
}
