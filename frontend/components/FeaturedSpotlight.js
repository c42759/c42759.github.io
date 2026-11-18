import Link from "next/link";

export default function FeaturedSpotlight() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-gray-50 dark:from-[#1D1D20] dark:via-[#1D1D20] dark:to-[#161618] border border-black/10 dark:border-cv-dark/60 p-8 sm:p-12 shadow-xl">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cv-orange/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
          {/* Left Column: Spotlight Info & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cv-orange/10 border border-cv-orange/30 text-cv-orange text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>FEATURED ARCHITECTURE GUIDE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-cv-dark dark:text-white leading-tight mb-4">
              Mastering TMUX on Linux
            </h2>

            <p className="text-base sm:text-lg text-cv-dark/80 dark:text-cv-light/80 leading-relaxed mb-6">
              A comprehensive engineering handbook covering session persistence, window and pane orchestration, custom keybindings, and headless remote server productivity.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="/blog/2026-11-10-mastering-tmux-on-linux"
                className="px-6 py-3.5 bg-cv-orange hover:bg-cv-orange/90 text-white font-semibold text-sm rounded-xl shadow-lg shadow-cv-orange/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Read Complete Guide (12 min) &rarr;
              </Link>
              <span className="text-xs font-mono text-cv-dark/60 dark:text-cv-light/60">
                Includes .tmux.conf cheatsheet
              </span>
            </div>

            <div className="flex items-center space-x-6 pt-6 border-t border-black/10 dark:border-cv-dark/50 text-xs font-mono text-cv-dark/70 dark:text-cv-light/70">
              <div>
                <span className="font-bold text-cv-dark dark:text-white">17</span> Published Articles
              </div>
              <div className="w-1 h-1 rounded-full bg-cv-dark/30 dark:bg-white/30"></div>
              <div>
                <span className="font-bold text-cv-dark dark:text-white">Zero</span> Paywalls
              </div>
              <div className="w-1 h-1 rounded-full bg-cv-dark/30 dark:bg-white/30"></div>
              <div>
                <span className="font-bold text-cv-orange">100%</span> Markdown-backed
              </div>
            </div>
          </div>

          {/* Right Column: Terminal UI Mockup */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden bg-black/90 border border-storm-grey/40 shadow-2xl font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161618] border-b border-storm-grey/30">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[11px] text-storm-grey">carlos@dev-srv: tmux session</div>
                <div className="text-[10px] text-cv-orange font-bold">[tmux: 3 windows]</div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 text-cv-light space-y-3 leading-relaxed">
                <div>
                  <span className="text-storm-grey">$</span> <span className="text-cv-orange">tmux</span> new -s dev-server
                </div>
                <div className="text-emerald-400 text-[11px]">
                  [attached to session dev-server: 0 (1 pane)]
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/5 space-y-1.5 text-[11px]">
                  <div className="text-cv-peach font-bold text-[10px] tracking-wider uppercase">Key Shortcuts:</div>
                  <div className="flex justify-between text-cv-light/80">
                    <span>Ctrl+b c</span> <span className="text-storm-grey">Create new window</span>
                  </div>
                  <div className="flex justify-between text-cv-light/80">
                    <span>Ctrl+b &quot;</span> <span className="text-storm-grey">Split pane horizontally</span>
                  </div>
                  <div className="flex justify-between text-cv-light/80">
                    <span>Ctrl+b %</span> <span className="text-storm-grey">Split pane vertically</span>
                  </div>
                  <div className="flex justify-between text-cv-light/80">
                    <span>Ctrl+b z</span> <span className="text-storm-grey">Toggle zoom pane</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-cv-dark/60 dark:text-cv-light/60 text-[11px]">
                  <span className="text-storm-grey">$</span>
                  <span className="w-2 h-4 bg-cv-orange animate-pulse inline-block"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
