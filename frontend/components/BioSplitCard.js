import Image from "next/image";
import Link from "next/link";

export default function BioSplitCard() {
  const birthDate = new Date('1991-10-28');
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 border-t border-black/10 dark:border-cv-dark/40">
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#1D1D20] border border-black/10 dark:border-cv-dark/60 p-8 sm:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Portrait Cutout */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-2 border-cv-orange/40 shadow-2xl bg-gradient-to-tr from-[#1D1D20] to-storm-grey/20">
              <Image
                src="/avatar.jpg"
                alt="Carlos Quintinha"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D20] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

          {/* Right Column: Bio & Story */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cv-orange/10 border border-cv-orange/30 text-cv-orange text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <span>Software Architect &bull; Tech Reviewer</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-cv-dark dark:text-white mb-4">
              Hi, I&apos;m Carlos Quintinha.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-cv-dark/80 dark:text-cv-light/80 leading-relaxed font-normal mb-8">
              <p>
                I&apos;m a {age}-year-old DevOps &amp; Software Architect based in Aveiro, Portugal. Since 2012, I&apos;ve engineered systems across automotive, telecommunications, and big data analytics—specializing in CI/CD pipeline automation, Linux internals, and distributed platform stability.
              </p>
              <p>
                Beyond production software, I review workstation hardware, explore Linux desktop environments, and curate gaming experiences. I believe in reproducible developer tooling, transparent engineering documentation, and clean architecture.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/setup"
                className="px-5 py-2.5 bg-black/5 dark:bg-storm-grey/20 hover:bg-black/10 dark:hover:bg-storm-grey/30 text-cv-dark dark:text-white border border-black/10 dark:border-storm-grey/40 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
              >
                Inspect Workstation Setup &rarr;
              </Link>
              <Link
                href="/gallery"
                className="px-5 py-2.5 bg-black/5 dark:bg-storm-grey/20 hover:bg-black/10 dark:hover:bg-storm-grey/30 text-cv-dark dark:text-white border border-black/10 dark:border-storm-grey/40 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
              >
                Photography Gallery &rarr;
              </Link>
              <a
                href="https://www.linkedin.com/in/c42759/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-cv-orange hover:bg-cv-orange/90 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-cv-orange/20"
              >
                Connect on LinkedIn &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
