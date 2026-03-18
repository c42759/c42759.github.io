export default function Timeline({ title, items }) {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center space-x-3 mb-10">
        <div className="p-2 bg-cv-orange/10 rounded-lg">
          <svg className="w-6 h-6 text-cv-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-cv-dark dark:text-white tracking-tight">{title}</h2>
      </div>

      <div className="relative border-l-2 border-black/10 dark:border-cv-dark/70 ml-4 md:ml-6 space-y-12 pb-4">
        {items.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-10 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-white dark:bg-[#121212] border-2 border-cv-orange rounded-full group-hover:bg-cv-orange transition-colors duration-300 z-10"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold text-cv-dark dark:text-white mb-1 md:mb-0 group-hover:text-cv-orange dark:group-hover:text-cv-peach transition-colors">
                {item.role}
              </h3>
              <span className="text-sm font-medium text-cv-orange bg-cv-orange/10 px-3 py-1 rounded-full w-fit">
                {item.period}
              </span>
            </div>
            
            <div className="text-lg text-cv-orange dark:text-cv-light/80 font-medium mb-3">
              {item.company}
            </div>
            
            {item.description && (
              <p className="text-gray-700 dark:text-cv-light leading-relaxed">
                {item.description}
              </p>
            )}

            {item.technologies && item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.technologies.map((tech, idx) => (
                  <span key={idx} className="text-xs font-semibold text-cv-peach bg-cv-peach/10 px-2.5 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
