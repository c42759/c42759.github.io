import Blog from '@/components/Blog';
import blogData from '@/data/blog.json';

export const metadata = {
  title: 'Blog | Carlos Quintinha',
  description: 'Read my latest articles and technical blog posts.',
};

export default function BlogPage() {
  return (
    <div className="w-full pt-8 animate-in fade-in duration-500">
      <Blog posts={blogData} />
    </div>
  );
}
