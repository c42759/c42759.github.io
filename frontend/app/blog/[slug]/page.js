import Link from 'next/link';
import blogData from '@/data/blog.json';
import { notFound } from 'next/navigation';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  let content = post.content;
  if (post.content_file) {
    const filePath = path.join(process.cwd(), 'data', 'blog', post.content_file);
    content = fs.readFileSync(filePath, 'utf8');
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-cv-orange selection:text-white pb-20">
      <main className="flex flex-col items-center pt-12 px-6">
        <Link href="/" className="self-start md:ml-auto md:mr-auto md:w-full md:max-w-4xl text-cv-orange flex items-center mb-10 hover:underline">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to CV
        </Link>
        
        <article className="w-full max-w-4xl mx-auto bg-white dark:bg-[#1a1c1e] p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200 dark:border-cv-dark/30">
          <header className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-cv-dark dark:text-white mb-4 tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500 dark:text-cv-light/60 font-medium mt-4">
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </header>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-cv-light leading-relaxed">
            <MarkdownRenderer content={content} />
          </div>
        </article>
      </main>
      
      <footer className="text-center text-cv-light/50 text-sm mt-12 py-6 border-t border-cv-dark/30 max-w-4xl mx-auto">
        &copy; {new Date().getFullYear()} Carlos Quintinha. Crafted with Next.js and Tailwind CSS.
      </footer>
    </div>
  );
}
