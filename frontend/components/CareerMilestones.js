import Link from "next/link";

const ENTERPRISES = [
  { name: "Bosch", label: "Automotive & Industrial Tech" },
  { name: "ETAS", label: "Automotive Embedded & Cloud" },
  { name: "Broadvoice", label: "CCaaS & Telecom Infrastructure" },
  { name: "Primetag", label: "Data Analytics & Creator Platforms" },
  { name: "Open Source", label: "Linux Tools & Developer Automation" },
];

const MILESTONES = [
  {
    kicker: "Automotive CI/CD Strategy",
    title: "Standardized CI/CD & Test Automation at Scale",
    company: "ETAS (Bosch Service Solutions)",
    description: "Designed scalable, secure CI/CD infrastructure and cloud-native architectures. Led automation strategy across multi-team engineering organizations to eliminate pipeline bottlenecks and streamline automotive releases.",
  },
  {
    kicker: "High-Availability CCaaS Architecture",
    title: "Zero-Downtime Infrastructure Virtualization",
    company: "Broadvoice",
    description: "Architected core platform virtualization and containerized workflows for telecommunications services, structuring automated deployment pipelines that elevated team velocity and operational uptime.",
  },
  {
    kicker: "Real-Time Big Data & Analytics",
    title: "Campaign Data Processing at Production Concurrency",
    company: "Primetag SA",
    description: "Engineered scalable backend services handling real-time campaign metric ingest. Led deliverables as Product Owner & Software Engineer, translating data-heavy workflows into fast, reliable APIs.",
  },
];

export default function CareerMilestones() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 border-t border-black/10 dark:border-cv-dark/40">
      {/* Enterprise Company Logos/Badges Strip (matches reference) */}
      <div className="text-center mb-16">
        <p className="text-xs font-mono font-bold uppercase tracking-wider text-cv-dark/50 dark:text-cv-light/50 mb-6">
          Architected &amp; Delivered Across Enterprise Environments
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {ENTERPRISES.map((ent, idx) => (
            <div
              key={idx}
              className="px-5 py-2.5 rounded-xl bg-black/[0.03] dark:bg-[#1D1D20] border border-black/5 dark:border-cv-dark/50 text-cv-dark/80 dark:text-cv-light/80 font-bold text-sm tracking-tight flex flex-col items-center"
            >
              <span>{ent.name}</span>
              <span className="text-[10px] font-normal text-cv-dark/50 dark:text-cv-light/50 font-mono mt-0.5">{ent.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Milestone Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MILESTONES.map((milestone, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#1D1D20] border border-black/10 dark:border-cv-dark/50 shadow-sm"
          >
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-cv-orange mb-2">
                {milestone.kicker}
              </div>
              <h3 className="text-lg font-bold text-cv-dark dark:text-white mb-2 leading-snug">
                {milestone.title}
              </h3>
              <div className="text-xs font-medium text-cv-dark/60 dark:text-cv-light/60 mb-4 font-mono">
                {milestone.company}
              </div>
              <p className="text-sm text-cv-dark/70 dark:text-cv-light/70 leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/professional-path"
          className="inline-flex items-center space-x-2 text-sm font-semibold text-cv-orange hover:underline"
        >
          <span>Explore Complete Professional Timeline (2012 &mdash; Present)</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
