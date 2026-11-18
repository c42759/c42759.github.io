import EditorialHero from '@/components/EditorialHero';
import ManifestoSection from '@/components/ManifestoSection';
import SkillMatrix from '@/components/SkillMatrix';
import TopicExplorer from '@/components/TopicExplorer';
import FeaturedSpotlight from '@/components/FeaturedSpotlight';
import CareerMilestones from '@/components/CareerMilestones';
import LatestPosts from '@/components/LatestPosts';
import Repositories from '@/components/Repositories';
import BioSplitCard from '@/components/BioSplitCard';
import reposData from '@/data/repositories.json';
import postsData from '@/data/blog';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. Editorial Hero Section */}
      <div id="home" className="w-full scroll-mt-24">
        <EditorialHero />
      </div>

      {/* 2. Architectural Manifesto Section */}
      <ManifestoSection />

      {/* 3. Installable Engineering Stacks (6-Card Competency Matrix) */}
      <SkillMatrix />

      {/* 4. Problem-Solving Hub ("What do you want to solve?") */}
      <TopicExplorer />

      {/* 5. Flagship Guide Spotlight (TMUX Guide Feature Card) */}
      <FeaturedSpotlight />

      {/* 6. Enterprise Track Record & Social Proof */}
      <CareerMilestones />

      {/* 7. Latest Posts & Guides */}
      <LatestPosts posts={postsData} />

      {/* 8. Open Source Repositories */}
      <Repositories repos={reposData} />

      {/* 9. Personal Bio & Story */}
      <BioSplitCard />
    </div>
  );
}
