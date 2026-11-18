export default function ManifestoSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16 border-t border-b border-black/10 dark:border-cv-dark/40 bg-black/[0.02] dark:bg-[#1D1D20]/50 backdrop-blur-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Column: Bold Editorial Assertion */}
        <div className="lg:col-span-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-cv-dark dark:text-white leading-[1.15]">
            Bad architecture is now the most expensive it has ever been.
          </h2>
          <div className="mt-4 w-16 h-1 bg-cv-orange rounded-full"></div>
        </div>

        {/* Right Column: Narrative / Philosophy */}
        <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-cv-dark/80 dark:text-cv-light/80 leading-relaxed font-normal">
          <p>
            Generative tools and AI copilots have made outputting syntax trivial. But code velocity without architectural guardrails simply produces technical debt at unprecedented scale.
          </p>
          <p>
            Systems engineering fundamentals remain unchanged: Linux kernel scheduling, process isolation, deterministic CI/CD pipelines, memory boundaries, and resilient networking dictate whether a platform survives real-world production load.
          </p>
          <p>
            Throughout 13+ years designing automotive software architectures at Bosch and ETAS, telecommunications platforms, and distributed systems, my mission has been clear: build reproducible, high-throughput architectures and document the exact mechanics so engineers can ship with complete confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
