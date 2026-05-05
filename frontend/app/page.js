import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Repositories from '@/components/Repositories';
import reposData from '@/data/repositories.json';

export default function Home() {
  return (
    <>
      <div id="home" className="w-full scroll-mt-24">
        <Header />
      </div>

      <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
      <AboutMe />

      <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
      <Repositories repos={reposData} />
    </>
  );
}
