import Link from 'next/link';

export default function LatestPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12 mb-12">

      <h2 className="text-2xl md:text-3xl font-bold text-cv-dark dark:text-white mb-8 text-center font-sans relative inline-block left-1/2 -translate-x-1/2">
        Latest Blog Posts
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-cv-orange rounded-full opacity-70"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...posts]
          .filter((post) => new Date(post.date) <= new Date())
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 4)
          .map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between p-6 bg-white dark:bg-[#1a1c1e] rounded-2xl border border-gray-200 dark:border-cv-dark/30 hover:border-cv-orange/50 hover:bg-gray-50 dark:hover:bg-cv-dark/20 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <div>
                <time className="text-xs font-medium text-gray-500 dark:text-cv-light/60 block mb-2">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <h3 className="text-xl font-bold text-cv-dark dark:text-white group-hover:text-cv-orange transition-colors mb-3 line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-700 dark:text-cv-light leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-cv-orange dark:text-cv-peach hover:text-cv-peach dark:hover:text-cv-orange transition-colors group-hover:translate-x-1 duration-300 mt-auto pt-4">
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
