import Image from 'next/image';

export default function GamerLife({ games }) {
  // Sort games by title alphabetically
  const sortedGames = [...games].sort((a, b) => a.title.localeCompare(b.title));
  
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center space-x-3 mb-10">
        <div className="p-2 bg-cv-orange/10 rounded-lg">
          <svg className="w-6 h-6 text-cv-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Gamer Life</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedGames.map((game) => (
          <div key={game.id} className="group relative rounded-2xl overflow-hidden bg-[#1a1c1e] border border-cv-dark/30 hover:border-cv-orange/50 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cv-orange/10 flex flex-col h-full">
            
            {/* Game Cover */}
            <div className="relative h-64 w-full bg-cv-dark/20 overflow-hidden">
              <Image 
                src={game.cover} 
                alt={game.title} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 blur-sm brightness-50 group-hover:blur-none group-hover:brightness-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1e] via-transparent to-transparent opacity-100 group-hover:opacity-70 transition-opacity"></div>
              
              {/* Rating at the top right */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center space-x-1 border border-white/10 z-10">
                <span className="text-cv-orange text-sm shrink-0">★</span>
                <span className="text-xs font-bold text-white">{game.evaluation}/5</span>
              </div>
            </div>

            {/* Game Content */}
            <div className="p-5 flex flex-col flex-1 relative z-10 -mt-10 bg-gradient-to-b from-transparent to-[#1a1c1e] pt-10">
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">{game.title}</h3>
              
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cv-peach bg-cv-peach/10 px-2 py-0.5 rounded-full">
                  {game.platform}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-white/10 px-2 py-0.5 rounded-full">
                  {game.style}
                </span>
                <span className="text-[10px] font-bold text-cv-light/60 border border-cv-dark/50 px-2 py-0.5 rounded-full">
                  {game.releaseDate}
                </span>
              </div>

              <p className="text-sm text-cv-light/80 mb-6 flex-1 line-clamp-3">
                {game.description}
              </p>
              
              <div className="flex items-center justify-between text-xs font-medium pt-4 border-t border-cv-dark/50">
                <div className="flex flex-col">
                  <span className="text-cv-light/60">Completion</span>
                  <span className="text-cv-orange">{game.completion}%</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-cv-light/60">Playtime</span>
                  <span className="text-cv-peach">{game.hoursPlayed} hrs</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
