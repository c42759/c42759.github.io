import Link from 'next/link';

export default function Blog({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12 mb-12">
      <div className="flex items-center space-x-3 mb-10">
        <div className="p-2 bg-cv-orange/10 rounded-lg">
          <svg className="w-6 h-6 text-cv-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-cv-dark dark:text-white tracking-tight">Recent Blog Posts</h2>
      </div>

      <div className="flex flex-col space-y-6">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="group block p-6 bg-white dark:bg-[#1a1c1e] rounded-2xl border border-gray-200 dark:border-cv-dark/30 hover:border-cv-orange/50 hover:bg-gray-50 dark:hover:bg-cv-dark/20 transition-all duration-300 shadow-sm dark:shadow-none"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
              <h3 className="text-xl font-bold text-cv-dark dark:text-white group-hover:text-cv-orange transition-colors">
                {post.title}
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
        ))}
      </div>
    </section>
  );
}
