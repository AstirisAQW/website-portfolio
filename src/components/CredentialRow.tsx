import { TechIcon } from './TechIcon'

interface CredentialRowProps {
  name: string
  logo: string
  institution: string
  organization?: string
  year: string
  honors?: string
}

export function CredentialRow({
  name,
  logo,
  institution,
  organization,
  year,
  honors,
}: CredentialRowProps) {
  return (
    <li className="logo-list-item flex items-center gap-3 py-[0.35rem]">
      <TechIcon src={logo} name={institution} size="lg" />
      <span>
        <strong className="font-semibold text-ink">{name}</strong>
        <br />
        {organization ?? institution}, {year}
        {honors && (
          <>
            <br />
            {honors}
          </>
        )}
      </span>
    </li>
  )
}
