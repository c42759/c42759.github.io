import React from 'react';

const icons = {
  game: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  globe: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  keyboard: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  python: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  terminal: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
};

export default function Repositories({ repos }) {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-cv-dark dark:text-white mb-8 text-center font-sans relative inline-block left-1/2 -translate-x-1/2">
        Main Repositories
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-cv-orange rounded-full opacity-70"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <a
            key={index}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-white dark:bg-cv-dark/30 rounded-xl p-6 shadow-md hover:shadow-xl border border-black/5 dark:border-white/10 hover:border-cv-orange/50 dark:hover:border-cv-orange/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-cv-orange/10 text-cv-orange rounded-lg group-hover:scale-110 transition-transform duration-300">
                {icons[repo.icon] || icons.terminal}
              </div>
              <h3 className="text-lg font-bold text-cv-dark dark:text-white group-hover:text-cv-orange transition-colors">
                {repo.title}
              </h3>
            </div>

            <p className="text-sm text-gray-600 dark:text-cv-light/80 leading-relaxed flex-grow">
              {repo.description}
            </p>

            <div className="mt-6 flex items-center text-xs font-semibold text-cv-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Repository
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
