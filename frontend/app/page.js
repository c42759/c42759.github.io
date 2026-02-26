import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Timeline from '@/components/Timeline';
import WorkSetup from '@/components/WorkSetup';
import GamerLife from '@/components/GamerLife';
import Blog from '@/components/Blog';

import gamesData from '@/data/games.json';
import blogData from '@/data/blog.json';

const professionalPath = [
  {
    role: "Software Architect",
    company: "Current Company",
    period: "2023 - Present",
    description: "Designing and implementing complex software architectures, automating workflows, and leading teams to success."
  },
  {
    role: "Senior Software Engineer",
    company: "Previous Company",
    period: "2019 - 2023",
    description: "Developed scalable platforms, optimized CI/CD pipelines, and enhanced user experience."
  },
  {
    role: "Full Stack Developer",
    company: "Various IT Companies",
    period: "2012 - 2019",
    description: "Built robust front-end and back-end solutions across automotive, telecommunications, and analytics industries."
  }
];

const educationalPath = [
  {
    role: "MSc in Software Engineering",
    company: "University of Aveiro",
    period: "2010 - 2012",
    description: "Focus on software architecture and distributed systems."
  },
  {
    role: "BSc in Computer Science",
    company: "University of Aveiro",
    period: "2007 - 2010",
    description: "Core computer science fundamentals."
  }
];

const workSetup = [
  { category: "Monitor 1", name: 'Xiaomi 34" 144hz 21:9 WQHD Curved' },
  { category: "Monitor 2", name: 'Xiaomi 34" 144hz 21:9 WQHD Curved' },
  { category: "Monitor 3", name: "Verbatim PMT-14 Portable Monitor Metal Housing" },
  { category: "Headset", name: "Steelseries Arctis 9" },
  { category: "Mic", name: "Krom Kapsule" },
  { category: "Keyboard", name: "Logitech Mini Keys Keyboard US International" },
  { category: "Mouse", name: "Logitech MX Master 3 Gray" },
  { category: "Webcam", name: "Logitech C920s HD Pro Webcam" },
  { category: "Case", name: "Phanteks Evolv Shift 2" },
  { category: "MB", name: "ASUS ROG X570-I AM4" },
  { category: "CPU", name: "AMD Ryzen 3600" },
  { category: "CPU Cooler", name: "Corsair Hydro Series H60" },
  { category: "RAM", name: "Ballistix RGB 2x32GB DDR4 3200Mhz CL16" },
  { category: "SSD", name: "Western Digital Black SN750 1TB" },
  { category: "HDD", name: "Seagate IronWolf 8TB 7200RPM 256MB SATA III" },
  { category: "GPU", name: "ASUS Strix GTX 960 4GB" },
  { category: "PSU", name: "Fractal Design Ion SFX-L 650W" },
];

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
        <GamerLife games={gamesData} />
        
        <div className="w-full h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-cv-dark/50 to-transparent my-4"></div>
        <Blog posts={blogData} />
      </main>
      
      <footer className="text-center text-cv-light/50 text-sm mt-12 py-6 border-t border-cv-dark/30 max-w-4xl mx-auto">
        &copy; {new Date().getFullYear()} Carlos Quintinha. Crafted with Next.js and Tailwind CSS.
      </footer>
    </div>
  );
}
