import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Timeline from '@/components/Timeline';
import WorkSetup from '@/components/WorkSetup';
import GamerLife from '@/components/GamerLife';
import Blog from '@/components/Blog';

import gamesData from '@/data/games.json';
import blogData from '@/data/blog.json';

import professionalPath from '@/data/professionalPath.json';
import educationalPath from '@/data/educationalPath.json';

import workSetup from '@/data/workSetup.json';
import StickyMenu from '@/components/StickyMenu';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-cv-orange selection:text-white pb-20">
      <main className="flex flex-col items-center">
        <StickyMenu />

        <div id="home" className="w-full scroll-mt-24">
          <Header />
        </div>

        <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
        <AboutMe />

        <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
        <div id="professional-path" className="w-full scroll-mt-24">
          <Timeline title="Professional Path" items={professionalPath} />
        </div>

        <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
        <div id="educational-path" className="w-full scroll-mt-24">
          <Timeline title="Educational Path" items={educationalPath} />
        </div>

        <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
        <div id="setup" className="w-full scroll-mt-24">
          <WorkSetup setup={workSetup} />
        </div>

        <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
        <div id="blog" className="w-full scroll-mt-24">
          <Blog posts={blogData} />
        </div>

        <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
        <div id="gaming" className="w-full scroll-mt-24">
          <GamerLife games={gamesData} />
        </div>
      </main>

      <footer className="text-center text-cv-light/50 text-sm mt-12 py-6 border-t border-cv-dark/30 max-w-4xl mx-auto">
        &copy; {new Date().getFullYear()} Carlos Quintinha. Crafted with Next.js and Tailwind CSS.
      </footer>
    </div>
  );
}
