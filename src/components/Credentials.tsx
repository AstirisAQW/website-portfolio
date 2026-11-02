import { Picture } from './Picture'
import { AwardIcon, CheckCircleIcon } from './Icons'
import { CERTIFICATIONS, EDUCATION, HONORS } from '../content/profile'

export function EducationList() {
  return (
    <div className="border border-white/10 bg-[#0c0e14] p-6 sm:p-8">
      <div className="border-b border-white/10 pb-3 mb-6 flex items-baseline justify-between font-mono text-xs">
        <span className="text-[var(--accent-primary)] font-bold">[LEDGER: TERTIARY EDUCATION]</span>
        <span className="text-white/40">2022 — 2026</span>
      </div>

      <div className="space-y-6">
        {EDUCATION.map((item) => (
          <div key={item.id} className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h4 className="text-ink font-display text-xl sm:text-2xl font-bold tracking-tight">
                {item.degree}
              </h4>
              <span className="font-mono text-xs uppercase text-white/70">
                USTP // CLASS OF 2026
              </span>
            </div>

            <p className="font-sans text-sm text-white/70 max-w-2xl leading-relaxed">
              University of Science and Technology of Southern Philippines. Core specialization in
              algorithm design, automata theory, computer architecture, dynamic graph machine
              learning, and full-stack software engineering.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 font-mono text-xs text-white/60">
              <span className="border border-white/10 bg-white/[0.02] px-2.5 py-1">
                [DISTINCTION: CUM LAUDE]
              </span>
              <span className="border border-white/10 bg-white/[0.02] px-2.5 py-1">
                [SCHOLARSHIP: DOST-SEI JLSS]
              </span>
              <span className="border border-white/10 bg-white/[0.02] px-2.5 py-1">
                [DEAN'S LISTER: 2022–2026]
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function HonorsList() {
  return (
    <div className="border border-white/10 bg-[#0c0e14] p-6 sm:p-8">
      <div className="border-b border-white/10 pb-3 mb-6 flex items-baseline justify-between font-mono text-xs">
        <span className="text-[var(--accent-primary)] font-bold">[LEDGER: ACADEMIC HONORS]</span>
        <span className="text-white/40">VERIFIED MERIT</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {HONORS.map((honor, index) => (
          <div
            key={honor.id}
            className="border border-white/10 bg-white/[0.02] p-5 space-y-3 hover:border-white/30 transition-colors"
          >
            <div className="flex items-center justify-between font-mono text-xs text-white/40">
              <span>[№ 0{index + 1}]</span>
              <AwardIcon className="h-4 w-4 text-[var(--accent-primary)]" />
            </div>

            <div>
              <h5 className="text-ink font-display text-lg font-bold">
                {honor.title}
              </h5>
              <p className="font-mono text-xs text-soft mt-1">
                {honor.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CertificationsList() {
  return (
    <div className="border border-white/10 bg-[#0c0e14] p-6 sm:p-8">
      <div className="border-b border-white/10 pb-3 mb-6 flex items-baseline justify-between font-mono text-xs">
        <span className="text-[var(--accent-primary)] font-bold">[LEDGER: VERIFIED CREDENTIALS]</span>
        <span className="text-white/40">CISCO NETWORKING ACADEMY</span>
      </div>

      <div className="space-y-4">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="border border-white/10 bg-white/[0.02] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <div className="border border-white/15 bg-black/60 h-20 w-20 shrink-0 p-2 flex items-center justify-center">
              <Picture
                {...cert.image}
                className="h-full w-full object-contain"
                imgClassName="object-contain h-full w-full"
              />
            </div>

            <div className="flex-1 space-y-1.5">
              <div className="flex flex-wrap items-center gap-3">
                <h4 className="text-ink font-display text-xl font-bold">{cert.title}</h4>
                <span className="border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-mono text-[11px] px-2 py-0.5 inline-flex items-center gap-1">
                  <CheckCircleIcon className="h-3 w-3" />
                  <span>VERIFIED RECORD</span>
                </span>
              </div>

              <p className="font-mono text-xs text-soft">
                ISSUER: {cert.issuer} • DATE: {cert.date}
              </p>

              <p className="font-sans text-xs text-body leading-relaxed pt-1 max-w-2xl">
                Verified foundational competence in network architecture, IPv4/IPv6 address
                allocation, packet switching, routing protocols, subnetting, and endpoint hardware
                security.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
