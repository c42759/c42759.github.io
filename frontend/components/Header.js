import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full max-w-4xl mx-auto pt-24 pb-12 px-6 flex flex-col md:flex-row items-center md:items-start md:space-x-8 text-center md:text-left gap-6">
      <div className="relative shrink-0">
        <div className="absolute inset-0 bg-cv-orange rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cv-dark/50 shadow-2xl backdrop-blur-sm">
          <Image
            src="/avatar_2.jpg"
            alt="Carlos Quintinha avatar"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col justify-center flex-1 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-cv-dark dark:text-white mb-2 font-sans">
          Carlos <span className="text-cv-orange">Quintinha</span>
        </h1>
        <h2 className="text-xl md:text-3xl text-cv-orange dark:text-cv-peach font-medium mb-4">
          Software Architect
        </h2>

        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <span className="flex items-center space-x-1 bg-black/5 dark:bg-cv-dark/40 border border-black/10 dark:border-cv-dark/60 rounded-full px-3 py-1 text-sm font-medium text-cv-dark dark:text-cv-light backdrop-blur-sm shadow-sm dark:shadow-none">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>PT / EN</span>
            </span>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <SocialLink href="https://github.com/c42759" label="GitHub" icon={GitHubIcon} />
            <SocialLink href="https://gitlab.com/c42759" label="GitLab" icon={GitLabIcon} />
            <SocialLink href="https://www.linkedin.com/in/carlos-santos-4abab492/" label="LinkedIn" icon={LinkedInIcon} />
          </div>
        </div>
      </div>
    </header>
  );
}

function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 bg-white/80 dark:bg-cv-dark/30 hover:bg-cv-orange/10 dark:hover:bg-cv-orange/20 border border-black/10 dark:border-cv-dark/50 hover:border-cv-orange/50 rounded-full transition-all duration-300 text-cv-dark dark:text-cv-light hover:text-cv-orange dark:hover:text-cv-orange group shadow-lg"
    >
      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </a>
  );
}

// Simple internal icons as fallback (you can replace with a library like lucide-react if needed later)
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
