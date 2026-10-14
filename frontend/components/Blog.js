'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

export default function Blog({ posts }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredPosts = useMemo(() => {
    if (!posts || posts.length === 0) return [];
    const now = isClient ? new Date() : null;
    const query = searchQuery.trim().toLowerCase();

    return [...posts]
      .filter((post) => {
        if (now) {
          const postDate = post.date.includes('T') ? new Date(post.date) : new Date(post.date + 'T00:00:00');
          if (postDate > now) return false;
        }
        if (!query) return true;
        const titleMatch = post.title?.toLowerCase().includes(query);
        const excerptMatch = post.excerpt?.toLowerCase().includes(query);
        return titleMatch || excerptMatch;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [posts, isClient, searchQuery]);

  if (!posts || posts.length === 0) return null;

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12 mb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-cv-orange/10 rounded-lg shrink-0">
            <svg className="w-6 h-6 text-cv-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-cv-dark dark:text-white tracking-tight">Recent Blog Posts</h2>
        </div>

        <div className="relative w-full sm:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
            aria-label="Search blog posts by title or excerpt"
            className="w-full pl-9 pr-8 py-2 bg-white dark:bg-[#1a1c1e] text-sm text-cv-dark dark:text-white rounded-xl border border-gray-200 dark:border-cv-dark/30 focus:outline-none focus:border-cv-orange focus:ring-1 focus:ring-cv-orange transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="p-8 text-center bg-white dark:bg-[#1a1c1e] rounded-2xl border border-gray-200 dark:border-cv-dark/30">
            <p className="text-gray-600 dark:text-cv-light">
              No posts found matching &ldquo;<span className="font-semibold text-cv-orange">{searchQuery}</span>&rdquo;.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs font-semibold text-cv-orange hover:underline cursor-pointer"
            >
              Clear search filter
            </button>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group block p-6 bg-white dark:bg-[#1a1c1e] rounded-2xl border border-gray-200 dark:border-cv-dark/30 hover:border-cv-orange/50 hover:bg-gray-50 dark:hover:bg-cv-dark/20 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                <h3 className="text-xl font-bold text-cv-dark dark:text-white group-hover:text-cv-orange transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <time className="text-xs font-medium text-gray-500 dark:text-cv-light/60 shrink-0 mt-1 md:mt-0">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>

              <p className="text-gray-700 dark:text-cv-light leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-cv-orange dark:text-cv-peach hover:text-cv-peach dark:hover:text-cv-orange transition-colors group-hover:translate-x-1 duration-300">
                Read article
                <svg className="ml-1 w-4 h-4" transform="rotate(0)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
