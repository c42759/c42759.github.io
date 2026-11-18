import Link from "next/link";

const DOMAINS = [
  {
    id: "architecture",
    kicker: "Domain 01",
    title: "Architecture & Distributed Systems",
    description: "Decoupled microservice architectures, fault-tolerant CCaaS platforms, high-throughput caching, and deterministic configuration management.",
    skills: ["Microservices", "Docker", "Linux", "REST/gRPC", "Event-Driven", "SQL/NoSQL", "Python"],
    linkText: "View Architecture Roles",
    linkHref: "/professional-path",
  },
  {
    id: "devops",
    kicker: "Domain 02",
    title: "DevOps & Platform Engineering",
    description: "Automated multi-team CI/CD pipelines, container orchestration, Docker Compose, Cloudflare Pages/Workers, and infrastructure-as-code.",
    skills: ["CI/CD Pipelines", "Jenkins", "GitHub Actions", "Docker Compose", "Groovy", "Cloudflare", "Shell"],
    linkText: "Explore DevOps Experience",
    linkHref: "/professional-path",
  },
  {
    id: "linux",
    kicker: "Domain 03",
    title: "Linux Internals & Observability",
    description: "Deep-dive system profiling, systemd service supervision, journalctl logging catalogs, memory/disk diagnostic tooling, and terminal multiplexing.",
    skills: ["Systemd", "Journalctl", "Btop / Htop", "TMUX", "Disk / du / ncdu", "Kernel I/O", "Bash Scripting"],
    linkText: "Read Linux Guides",
    linkHref: "/blog",
  },
  {
    id: "frontend",
    kicker: "Domain 04",
    title: "Modern Full-Stack & Developer UI",
    description: "High-performance React 19 and Next.js static architectures, Tailwind CSS v4 design systems, client-side caching, and typography ergonomics.",
    skills: ["Next.js", "React", "Tailwind CSS", "Node.js", "FastAPI", "Static Export", "Responsive UI"],
    linkText: "Browse Web Repositories",
    linkHref: "https://github.com/c42759",
    external: true,
  },
  {
    id: "automotive",
    kicker: "Domain 05",
    title: "Automotive & Embedded Systems",
    description: "Debugging C embedded software for automotive integrated hardware, refactoring regression test batteries, and hardware integration automation.",
    skills: ["Embedded C", "Hardware Integration", "Battery Test Suites", "Automotive Diagnostics", "Cross-Compilation"],
    linkText: "Read ETAS / Bosch Background",
    linkHref: "/professional-path",
  },
  {
    id: "hardware",
    kicker: "Domain 06",
    title: "Hardware Rig & Homelab Benchmarks",
    description: "Custom multi-display workstation ergonomics, headless Linux server infrastructure, audio processing chains, and hardware performance testing.",
    skills: ["Dual 4K / Ultrawide", "Linux Servers", "Homelab Networking", "Mechanical Keyboards", "Audio DAC/AMP"],
    linkText: "Inspect Workstation Setup",
    linkHref: "/setup",
  },
];

export default function SkillMatrix() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-storm-grey/10 border border-storm-grey/30 text-cv-dark dark:text-cv-light text-xs font-mono font-semibold uppercase mb-3">
            <span>Competency Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-cv-dark dark:text-white">
            Engineering domains, as structured stacks
          </h2>
          <p className="text-base sm:text-lg text-cv-dark/70 dark:text-cv-light/70 mt-2 max-w-2xl">
            Hands-on technical competencies and infrastructure patterns battle-tested across enterprise environments.
          </p>
        </div>

        <Link
          href="/professional-path"
          className="mt-4 md:mt-0 text-sm font-semibold text-cv-orange hover:underline flex items-center space-x-1 shrink-0"
        >
          <span>Full Career Timeline &rarr;</span>
        </Link>
      </div>

      {/* 6-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DOMAINS.map((domain) => (
          <div
            key={domain.id}
            className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#1D1D20] border border-black/10 dark:border-cv-dark/50 hover:border-cv-orange/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-cv-orange mb-2">
                {domain.kicker}
              </div>
              <h3 className="text-xl font-bold text-cv-dark dark:text-white mb-3 group-hover:text-cv-orange transition-colors">
                {domain.title}
              </h3>
              <p className="text-sm text-cv-dark/70 dark:text-cv-light/70 leading-relaxed mb-6">
                {domain.description}
              </p>

              {/* Skill Pill Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {domain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-lg bg-black/5 dark:bg-storm-grey/15 border border-black/5 dark:border-storm-grey/30 text-cv-dark/90 dark:text-cv-light/90 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-cv-dark/40">
              {domain.external ? (
                <a
                  href={domain.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-cv-orange hover:underline"
                >
                  <span>{domain.linkText}</span>
                  <span>&rarr;</span>
                </a>
              ) : (
                <Link
                  href={domain.linkHref}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-cv-orange hover:underline"
                >
                  <span>{domain.linkText}</span>
                  <span>&rarr;</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
