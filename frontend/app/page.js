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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-cv-orange selection:text-white pb-20">
      <main className="flex flex-col items-center">
        <Header />
        
        <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
        <AboutMe />
        
        <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
        <Timeline title="Professional Path" items={professionalPath} />
        
        <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
        <Timeline title="Educational Path" items={educationalPath} />
        
        <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
        <WorkSetup setup={workSetup} />

        <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
        <Blog posts={blogData} />
        
        <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
        <GamerLife games={gamesData} />
      </main>
      
      <footer className="text-center text-cv-light/50 text-sm mt-12 py-6 border-t border-cv-dark/30 max-w-4xl mx-auto">
        &copy; {new Date().getFullYear()} Carlos Quintinha. Crafted with Next.js and Tailwind CSS.
      </footer>
    </div>
  );
}
