"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function GamerLife({ games }) {
  const [viewMode, setViewMode] = useState('card'); // 'card' or 'list'
  const [filter, setFilter] = useState('All'); // 'All', 'Completed', 'Started', 'Not Started'
  const [searchQuery, setSearchQuery] = useState('');

  // Sort games by title alphabetically
  const sortedGames = [...games].sort((a, b) => a.title.localeCompare(b.title));

  const filteredGames = sortedGames.filter((game) => {
    if (searchQuery && !game.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filter === 'All') return true;
    if (filter === 'Completed') return game.completion === 100;
    if (filter === 'Started') return game.completion > 0 && game.completion < 100;
    if (filter === 'Not Started') return game.completion === 0;
    return true;
  });

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-cv-orange/10 rounded-lg">
            <svg className="w-6 h-6 text-cv-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-cv-dark dark:text-white tracking-tight">Gamer Life</h2>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white dark:bg-[#1a1c1e] border border-gray-200 dark:border-cv-dark/30 text-cv-dark dark:text-white text-sm rounded-lg focus:ring-cv-orange focus:border-cv-orange block w-full sm:w-48 pl-9 p-2 outline-none"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white dark:bg-[#1a1c1e] border border-gray-200 dark:border-cv-dark/30 text-cv-dark dark:text-white text-sm rounded-lg focus:ring-cv-orange focus:border-cv-orange block p-2 outline-none"
          >
            <option value="All">All Games</option>
            <option value="Completed">Completed</option>
            <option value="Started">Started</option>
            <option value="Not Started">Not Started</option>
          </select>

          <div className="flex bg-gray-100 dark:bg-cv-dark/20 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('card')}
              className={`p-1.5 rounded-md transition-colors ${viewMode === 'card' ? 'bg-white dark:bg-[#1a1c1e] text-cv-orange shadow-sm' : 'text-gray-500 hover:text-cv-dark dark:hover:text-white'}`}
              title="Card View"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white dark:bg-[#1a1c1e] text-cv-orange shadow-sm' : 'text-gray-500 hover:text-cv-dark dark:hover:text-white'}`}
              title="List View"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {filteredGames.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-cv-light/60 py-12">
          No games found for this filter.
        </div>
      ) : (
        <div className={viewMode === 'card' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col space-y-4"}>
          {filteredGames.map((game) => (
            viewMode === 'card' ? (
              <div key={game.id} className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#1a1c1e] border border-gray-200 dark:border-cv-dark/30 hover:border-cv-orange/50 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cv-orange/10 flex flex-col h-full">
                {/* Game Cover */}
                <div className="relative h-48 w-full bg-gray-200 dark:bg-cv-dark/20 overflow-hidden shrink-0">
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
                <div className="p-5 flex flex-col flex-1 relative z-10 -mt-8 bg-gradient-to-b from-transparent to-white dark:to-[#1a1c1e] pt-8">
                  <h3 className="text-lg font-bold text-cv-dark dark:text-white mt-2 mb-2 leading-tight">{game.title}</h3>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cv-orange dark:text-cv-peach bg-cv-orange/10 dark:bg-cv-peach/10 px-2 py-0.5 rounded-full">
                      {game.platform}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cv-dark dark:text-white bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full">
                      {game.style}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-cv-light/80 mb-4 flex-1 line-clamp-2">
                    {game.description}
                  </p>

                  {/* Objectives for Card */}
                  {game.objectives && game.objectives.length > 0 && (
                    <div className="mb-4">
                      <div className="space-y-1.5">
                        {game.objectives.slice(0, 3).map((obj, i) => (
                          <div key={i} className="flex items-start gap-2 text-[11px]">
                            {obj.completed ? (
                              <svg className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                            <span className={`line-clamp-1 ${obj.completed ? "text-gray-400 dark:text-cv-light/50 line-through" : "text-cv-dark/80 dark:text-white"}`}>{obj.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs font-medium pt-3 border-t border-cv-dark/10 dark:border-cv-dark/50 mt-auto">
                    <div className="flex flex-col">
                      <span className="dark:text-cv-light/60 text-cv-dark/60">Completion</span>
                      <span className="text-cv-orange font-bold text-sm">{game.completion}%</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="dark:text-cv-light/60 text-cv-dark/60">Playtime</span>
                      <span className="text-cv-peach font-bold text-sm">{game.hoursPlayed} hrs</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={game.id} className="group relative flex flex-col sm:flex-row rounded-2xl overflow-hidden bg-white dark:bg-[#1a1c1e] border border-gray-200 dark:border-cv-dark/30 hover:border-cv-orange/50 transition duration-300 hover:shadow-xl hover:shadow-cv-orange/10">
                {/* Game Cover */}
                <div className="relative h-48 sm:h-auto sm:w-56 sm:shrink-0 bg-gray-200 dark:bg-cv-dark/20 overflow-hidden">
                  <Image
                    src={game.cover}
                    alt={game.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 224px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 blur-sm brightness-50 group-hover:blur-none group-hover:brightness-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c1e] via-transparent to-transparent opacity-100 group-hover:opacity-70 transition-opacity hidden sm:block"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1e] via-transparent to-transparent opacity-100 group-hover:opacity-70 transition-opacity sm:hidden"></div>

                  {/* Rating at the top right */}
                  <div className="absolute top-3 right-3 sm:left-3 sm:right-auto bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center space-x-1 border border-white/10 z-10">
                    <span className="text-cv-orange text-sm shrink-0">★</span>
                    <span className="text-xs font-bold text-white">{game.evaluation}/5</span>
                  </div>
                </div>

                {/* Game Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 relative z-10 bg-white dark:bg-[#1a1c1e]">
                  <h3 className="text-xl font-bold text-cv-dark dark:text-white mb-2 leading-tight">{game.title}</h3>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cv-orange dark:text-cv-peach bg-cv-orange/10 dark:bg-cv-peach/10 px-2 py-0.5 rounded-full">
                      {game.platform}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cv-dark dark:text-white bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full">
                      {game.style}
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 dark:text-cv-light/60 border border-gray-300 dark:border-cv-dark/50 px-2 py-0.5 rounded-full">
                      {game.releaseDate}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-cv-light/80 mb-4 flex-1">
                    {game.description}
                  </p>

                  {/* Objectives for List */}
                  {game.objectives && game.objectives.length > 0 && (
                    <div className="mb-4">
                      <p className="text-[10px] font-bold text-gray-400 dark:text-cv-light/40 mb-1.5 uppercase tracking-wider">Objectives</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {game.objectives.map((obj, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs">
                            {obj.completed ? (
                              <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-gray-300 dark:text-gray-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                            <span className={obj.completed ? "text-gray-400 dark:text-cv-light/50 line-through" : "text-cv-dark/80 dark:text-white"}>{obj.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-8 text-xs font-medium pt-4 border-t border-gray-100 dark:border-cv-dark/30 mt-auto">
                    <div className="flex flex-col">
                      <span className="dark:text-cv-light/60 text-cv-dark/60 mb-1">Completion</span>
                      <span className="text-cv-orange font-bold text-sm">{game.completion}%</span>
                    </div>
                    <div className="flex flex-col text-right sm:text-left">
                      <span className="dark:text-cv-light/60 text-cv-dark/60 mb-1">Playtime</span>
                      <span className="text-cv-peach font-bold text-sm">{game.hoursPlayed} hrs</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </section>
  );
}
