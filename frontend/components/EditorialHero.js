import Image from "next/image";
import Link from "next/link";

export default function EditorialHero() {
  return (
    <section className="relative w-full max-w-6xl mx-auto pt-20 pb-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headlines, Manifesto Teaser, CTAs & Metrics */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Kicker badge */}
          <div className="inline-flex items-center space-x-2 w-fit px-3 py-1 rounded-full bg-cv-orange/10 border border-cv-orange/30 text-cv-orange text-xs font-mono font-semibold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-cv-orange animate-pulse"></span>
            <span>SYSTEM ARCHITECTURE & LINUX INTERNALS</span>
          </div>

          {/* Main Statement Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-cv-dark dark:text-white leading-[1.08] mb-6">
            Scalable systems aren&apos;t built by accident.
          </h1>

          {/* Subtitle / Narrative */}
          <p className="text-lg sm:text-xl text-cv-dark/80 dark:text-cv-light/80 leading-relaxed mb-8 max-w-2xl">
            DevOps & Software Architect with 13+ years bridging distributed architectures, Linux kernel internals, automated CI/CD pipelines, and high-concurrency developer platforms.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="/blog"
              className="px-6 py-3.5 bg-cv-orange hover:bg-cv-orange/90 text-white font-semibold text-sm rounded-xl shadow-lg shadow-cv-orange/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Technical Guides &rarr;
            </Link>
            <Link
              href="/professional-path"
              className="px-6 py-3.5 bg-white/80 dark:bg-[#1D1D20] hover:bg-gray-100 dark:hover:bg-storm-grey/20 text-cv-dark dark:text-cv-light border border-black/10 dark:border-cv-dark/60 font-semibold text-sm rounded-xl transition-all duration-300"
            >
              View Architecture &amp; CV
            </Link>
          </div>

          {/* Social Proof / Metrics Bar (matches reference) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-black/10 dark:border-cv-dark/50">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-cv-dark dark:text-white font-mono">13+</div>
              <div className="text-xs text-cv-dark/60 dark:text-cv-light/60 mt-0.5">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-cv-orange font-mono">16+</div>
              <div className="text-xs text-cv-dark/60 dark:text-cv-light/60 mt-0.5">Linux Deep Dives</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-cv-dark dark:text-white font-mono">25+</div>
              <div className="text-xs text-cv-dark/60 dark:text-cv-light/60 mt-0.5">Open Repositories</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-cv-peach font-mono">+1,500h</div>
              <div className="text-xs text-cv-dark/60 dark:text-cv-light/60 mt-0.5">Hardware Tested</div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Impact Portrait Frame */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* Ambient Lighting Glows */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-cv-orange/30 via-storm-grey/20 to-transparent rounded-3xl blur-2xl opacity-70"></div>

          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-black/10 dark:border-cv-dark/60 bg-white/50 dark:bg-[#1D1D20]/80 shadow-2xl backdrop-blur-md p-3">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-storm-grey/30 to-[#1D1D20]">
              <Image
                src="/avatar.jpg"
                alt="Carlos Quintinha"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D20] via-transparent to-transparent opacity-80"></div>

              {/* Status pill inside image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/60 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-white font-medium">Carlos Quintinha</span>
                </div>
                <span className="text-cv-light/70 font-mono text-[11px]">PT / EN</span>
              </div>
            </div>

            {/* Social link pills */}
            <div className="flex items-center justify-around pt-3 pb-1">
              <SocialItem href="https://github.com/c42759" label="GitHub" icon={GitHubIcon} />
              <SocialItem href="https://gitlab.com/c42759" label="GitLab" icon={GitLabIcon} />
              <SocialItem href="https://www.linkedin.com/in/c42759/" label="LinkedIn" icon={LinkedInIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialItem({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-1.5 px-3 py-1.5 text-xs text-cv-dark/80 dark:text-cv-light/80 hover:text-cv-orange dark:hover:text-cv-orange hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
      aria-label={label}
    >
      <Icon className="w-4 h-4" />
      <span className="font-medium">{label}</span>
    </a>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function GitLabIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 5.1 2h.02a.43.43 0 0 1 .4.27l2.12 6.55h8.72l2.12-6.55a.43.43 0 0 1 .4-.27h.02a.42.42 0 0 1 .39.16c.09.11.13.26.11.41l-1.22 3.78-2.44 7.51-1.22 3.78a.84.84 0 0 1-.3.94" fill="#fc6d26"/>
      <path d="M12 22.13L1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78L4.93 12z" fill="#e24329"/>
      <path d="M12 22.13l10.65-7.74a.84.84 0 0 0 .3-.94l-1.22-3.78-2.66-2.33z" fill="#e24329"/>
      <path d="M4.93 12l2.12-6.55 4.95 16.68z" fill="#fca326"/>
      <path d="M19.07 12l-2.12-6.55L12 22.13z" fill="#fca326"/>
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}
