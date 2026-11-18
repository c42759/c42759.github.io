import Link from "next/link";

export default function EditorialFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-black/10 dark:border-cv-dark/50 bg-black/[0.02] dark:bg-[#161618] mt-24">
      <div className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-5 flex flex-col items-start pr-4">
            <Link href="/" className="text-xl font-extrabold tracking-tight text-cv-dark dark:text-white">
              Carlos <span className="text-cv-orange">Quintinha</span>
            </Link>
            <p className="text-xs font-mono text-cv-orange font-semibold mt-1">
              DevOps &amp; Software Architect &bull; Aveiro, PT
            </p>
            <p className="text-sm text-cv-dark/70 dark:text-cv-light/70 mt-3 leading-relaxed max-w-sm">
              Designing scalable distributed architectures, deterministic CI/CD automation, and documenting production Linux systems.
            </p>

            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://github.com/c42759"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cv-dark/60 dark:text-cv-light/60 hover:text-cv-orange dark:hover:text-cv-orange transition-colors"
              >
                GitHub
              </a>
              <span className="text-cv-dark/20 dark:text-white/20">&bull;</span>
              <a
                href="https://gitlab.com/c42759"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cv-dark/60 dark:text-cv-light/60 hover:text-cv-orange dark:hover:text-cv-orange transition-colors"
              >
                GitLab
              </a>
              <span className="text-cv-dark/20 dark:text-white/20">&bull;</span>
              <a
                href="https://www.linkedin.com/in/c42759/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cv-dark/60 dark:text-cv-light/60 hover:text-cv-orange dark:hover:text-cv-orange transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 2: Architecture & Career */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cv-dark dark:text-white mb-4">
              Architecture
            </h4>
            <ul className="space-y-2.5 text-sm text-cv-dark/70 dark:text-cv-light/70">
              <li>
                <Link href="/professional-path" className="hover:text-cv-orange transition-colors">
                  Career Timeline
                </Link>
              </li>
              <li>
                <Link href="/educational-path" className="hover:text-cv-orange transition-colors">
                  Education &amp; Diplomas
                </Link>
              </li>
              <li>
                <a href="https://github.com/c42759" target="_blank" rel="noopener noreferrer" className="hover:text-cv-orange transition-colors">
                  Repositories
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Guides & Writing */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cv-dark dark:text-white mb-4">
              Guides &amp; Articles
            </h4>
            <ul className="space-y-2.5 text-sm text-cv-dark/70 dark:text-cv-light/70">
              <li>
                <Link href="/blog" className="hover:text-cv-orange transition-colors">
                  All Articles
                </Link>
              </li>
              <li>
                <Link href="/blog/2026-11-10-mastering-tmux-on-linux" className="hover:text-cv-orange transition-colors">
                  Mastering TMUX on Linux
                </Link>
              </li>
              <li>
                <Link href="/blog/automating-workflows-with-github-actions" className="hover:text-cv-orange transition-colors">
                  GitHub Actions Automation
                </Link>
              </li>
              <li>
                <Link href="/blog/2026-10-14-25-essential-linux-commands" className="hover:text-cv-orange transition-colors">
                  25 Essential Linux Commands
                </Link>
              </li>
              <li>
                <Link href="/blog/folder-size-within-linux" className="hover:text-cv-orange transition-colors">
                  Linux du &amp; ncdu Deep Dive
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Hardware & Media */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cv-dark dark:text-white mb-4">
              Hardware &amp; Media
            </h4>
            <ul className="space-y-2.5 text-sm text-cv-dark/70 dark:text-cv-light/70">
              <li>
                <Link href="/setup" className="hover:text-cv-orange transition-colors">
                  Workstation Rig
                </Link>
              </li>
              <li>
                <Link href="/gaming" className="hover:text-cv-orange transition-colors">
                  Gaming Benchmarks
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-cv-orange transition-colors">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-black/10 dark:border-cv-dark/40 flex flex-col sm:flex-row items-center justify-between text-xs text-cv-dark/50 dark:text-cv-light/50 font-mono gap-4">
          <div>
            &copy; {currentYear} Carlos Quintinha. All rights reserved.
          </div>
          <div className="flex items-center space-x-2">
            <span>Next.js</span>
            <span>&bull;</span>
            <span>Tailwind CSS</span>
            <span>&bull;</span>
            <span>Cloudflare / GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
