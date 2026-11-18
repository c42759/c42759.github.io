import Link from "next/link";

const TOPICS = [
  {
    id: "system-architecture",
    badge: "Architecture & Pipelines",
    question: "How do we automate multi-team CI/CD without deployment friction?",
    description: "Orchestrating containerized build steps, test suites, and zero-downtime static delivery.",
    links: [
      {
        title: "Automating workflows with GitHub Actions & CI/CD",
        href: "/blog/automating-workflows-with-github-actions",
        meta: "Guide • 8 min read",
      },
      {
        title: "Modern Next.js static export & Cloudflare deployment",
        href: "/blog/welcome-to-my-cv",
        meta: "Architecture • 6 min read",
      },
    ],
  },
  {
    id: "linux-productivity",
    badge: "Linux Internals & Terminal",
    question: "How do I turn a remote terminal into a persistent, productive workspace?",
    description: "Session multiplexing, headless background processes, and essential shell mastery.",
    links: [
      {
        title: "Mastering TMUX on Linux: Sessions, splits & productivity",
        href: "/blog/2026-11-10-mastering-tmux-on-linux",
        meta: "Comprehensive • 12 min read",
      },
      {
        title: "25 Essential Linux commands every engineer must know",
        href: "/blog/2026-10-14-25-essential-linux-commands",
        meta: "Reference • 15 min read",
      },
    ],
  },
  {
    id: "storage-performance",
    badge: "Storage & Diagnostics",
    question: "What is actually happening when disk fills up or processes spike?",
    description: "Diagnostic tools, sorting usage with du/ncdu, and diagnosing system logs with journalctl.",
    links: [
      {
        title: "Folder size within Linux: du, sort, and ncdu deep dive",
        href: "/blog/folder-size-within-linux",
        meta: "Storage • 7 min read",
      },
      {
        title: "Systemd journalctl catalogs and troubleshooting units",
        href: "/blog/2026-10-14-25-essential-linux-commands#5-systemd-service--log-management",
        meta: "Diagnostics • 5 min read",
      },
    ],
  },
  {
    id: "workstation-hardware",
    badge: "Hardware & Homelab",
    question: "How do I build a focused, dual-display developer workstation?",
    description: "Ergonomics, mechanical input, audio DAC chains, and headless Linux server setups.",
    links: [
      {
        title: "Full developer workstation & peripherals breakdown",
        href: "/setup",
        meta: "Hardware Spec • Desk Rig",
      },
      {
        title: "Curated gaming benchmarks & completion records",
        href: "/gaming",
        meta: "Review • +1,500 hrs",
      },
    ],
  },
];

export default function TopicExplorer() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 border-t border-black/10 dark:border-cv-dark/40">
      {/* Section Header with Icon */}
      <div className="flex items-start space-x-4 mb-12">
        <div className="w-12 h-12 rounded-2xl bg-cv-orange/10 border border-cv-orange/30 flex items-center justify-center text-cv-orange shrink-0">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-cv-dark dark:text-white">
            What do you want to solve?
          </h2>
          <p className="text-base sm:text-lg text-cv-dark/70 dark:text-cv-light/70 mt-1">
            Practical guides and architectural patterns for real-world production engineering.
          </p>
        </div>
      </div>

      {/* 4 Categorized Topic Rows */}
      <div className="space-y-6">
        {TOPICS.map((topic) => (
          <div
            key={topic.id}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1D1D20] border border-black/10 dark:border-cv-dark/50 hover:border-cv-orange/40 transition-all duration-300 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Question & Badge */}
              <div className="lg:col-span-5 pr-4">
                <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-cv-orange bg-cv-orange/10 px-2.5 py-0.5 rounded-full mb-3">
                  {topic.badge}
                </span>
                <h3 className="text-xl font-bold text-cv-dark dark:text-white leading-snug mb-2">
                  {topic.question}
                </h3>
                <p className="text-sm text-cv-dark/70 dark:text-cv-light/70">
                  {topic.description}
                </p>
              </div>

              {/* Right Column: Direct Guide Links */}
              <div className="lg:col-span-7 space-y-3">
                {topic.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="group/link flex items-center justify-between p-4 rounded-xl bg-black/[0.02] dark:bg-storm-grey/10 border border-black/5 dark:border-storm-grey/25 hover:border-cv-orange/50 hover:bg-black/[0.04] dark:hover:bg-storm-grey/20 transition-all duration-200"
                  >
                    <div>
                      <div className="text-sm font-semibold text-cv-dark dark:text-white group-hover/link:text-cv-orange transition-colors">
                        {link.title}
                      </div>
                      <div className="text-xs text-cv-dark/50 dark:text-cv-light/50 font-mono mt-0.5">
                        {link.meta}
                      </div>
                    </div>
                    <span className="text-cv-dark/40 dark:text-cv-light/40 group-hover/link:text-cv-orange group-hover/link:translate-x-1 transition-all pl-4 text-base">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
