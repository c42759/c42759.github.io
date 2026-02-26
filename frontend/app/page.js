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
    role: "DevOps Software Architect",
    company: "ETAS (Bosch Service Solutions)",
    period: "02/2025 - Present",
    description: "Designing and implementing scalable, secure, and highly available CI/CD infrastructure and cloud-native architectures. Leading the technical strategy for automation, containerization, and configuration management across multiple teams to ensure seamless software delivery and operational excellence. Responsible for driving DevOps best practices and standardizing the software development lifecycle.",
    technologies: ["Python", "Groovy", "CI/CD", "Docker", "Linux"]
  },
  {
    role: "DevOps Software Engineer",
    company: "ETAS (T&S and Lisbon Nearshore Consultant)",
    period: "03/2024 - 12/2024",
    description: "As a DevOps Software Engineer working with Jenkins, I focused on automating and streamlining the software development lifecycle, particularly around CI/CD. I used Jenkins to automate tasks such as building, testing, and deploying code, configuring pipelines to ensure efficient workflows. I integrated Jenkins with version control systems like Git, managed and customized plugins to extend Jenkins' functionality, and ensured the system remained scalable, secure, and reliable.",
    technologies: ["Groovy", "CI/CD"]
  },
  {
    role: "Software Engineer",
    company: "ETAS (T&S and Lisbon Nearshore Consultant)",
    period: "03/2023 - 03/2024",
    description: "Debugging C Embeeded Sofware destinated to Automotive Integrated Hardware, along the refactoring and fixing of already developed battery of tests. Also, Supporting a team with Software Development of a platform for internal use for tests integration, focused on the automation of configuration processes between several teams.",
    technologies: ["C", "Python", "ReactJS", "NodeJs", "SQL", "Shell Scripting", "Docker", "CI/CD", "Linux"]
  },
  {
    role: "Arch and DevOps Software Engineer",
    company: "Broadvoice",
    period: "03/2022 - 04/2023",
    description: "Design Architecture and DevOps for CCaaS platform, focused on stability and scalability using virtualization technology. Implementing a CI/CD workflow in the project and structuring work methods and software development to increase productivity at the team level.",
    technologies: ["Docker", "Python", "NodeJs", "SQL", "Shell Scripting", "CI/CD", "Github", "Linux"]
  },
  {
    role: "Fullstack Software Engineer",
    company: "Bosch (Alten Consultant)",
    period: "01/2021 - 02/2022",
    description: "Software Projection and Development of a platform for internal use for tests integration, focused on the automation of configuration processes between several teams. Structuring and implementation of development and deployment solutions for projects. Structuring work methods and software development to increase productivity at the team level.",
    technologies: ["React", "Redux", "Python", "Django", "SQL", "Docker", "Shell Scripting", "Linux"]
  },
  {
    role: "Backend Software Engineer",
    company: "Primetag SA",
    period: "09/2019 - 01/2021",
    description: "Software Projection and Development for the company's analysis platform between Brands and Content Creators, focusing on the use of real metrics/data for presenting statistics for the customers' campaigns. Part of the task is as Product Owner, thus allowing greater responsibility when it comes to the delivery of a certain deliverable, as well as Software Engineer assigned to other projects of other Product Owners.",
    technologies: ["Python", "Django", "Flask", "FastAPI", "SQL", "Docker", "Shell Scripting", "Linux"]
  },
  {
    role: "Project Manager & Fullstack Software Engineer",
    company: "Evoke Lda",
    period: "05/2017 - 09/2019",
    description: "During the indicated period, my main role was Project Manager, also adding the tasks of Software Developer, Eelectrotechnician, and R&D. In this opportunity, I had the opportunity to learn more about areas where I wasn't comfortable with (without doubt, the IoT area, was one of them). I improved my knowledge in programming languages like Javascript with support for technologies like jQuery and NodeJS and also Bash Scripting.",
    technologies: ["PHP", "SQL", "C", "Processing", "BO3", "LAMP Stack", "NodeJs", "jQuery", "Shell Scripting", "Linux", "Windows", "Mac OS"]
  },
  {
    role: "Project Manager & Fullstack Software Engineer",
    company: "Critec Lda",
    period: "01/2015 - 05/2017",
    description: "During 18 months, my tasks were the development of websites and web apps aimed at the corporate world and in the online and offline environment. After that time, my main job was updated to Project Manager, where I start to handle the entire production team (16 members), including the design and programming team.",
    technologies: ["PHP", "SQL", "BO3", "LAMP Stack", "jQuery", "ShellScripting", "Linux"]
  },
  {
    role: "Fullstack Software Engineer",
    company: "Incograf Lda",
    period: "01/2012 - 01/2015",
    description: "Production of more than a hundred websites, most of which are destined to the corporate environment and services presentation, also going through the development/configuration of online stores for the most diverse areas. I have deepened knowledge previously obtained concerning CMS (Joomla, WordPress, Drupal, Prestashop, and OpenCart) and in programming languages such as PHP, SQL, Javascript, and Bash Scripting. Part of the job was client and team management, software projection, and development.",
    technologies: ["PHP", "SQL", "LAMP Stack", "jQuery", "Linux", "Windows", "Mac OS"]
  }
];

const educationalPath = [
  {
    role: "English Course",
    company: "EasyTalk",
    period: "10/2023 - 02/2024",
    description: "I completed a 40-hour English course to strengthen and certify my language skills, as well as to refine my understanding of advanced grammar and communication techniques."
  },
  {
    role: "PHP Course",
    company: "Galileu",
    period: "09/2012 - 10/2012",
    description: "For 40 hours I attended the PHP course to consolidate and certify my knowledge in this technology, as well as to finish my learning concerning the use of OOP."
  },
  {
    role: "Computer Engineering (Technologies and Information Systems)",
    company: "Aveiro University",
    period: "09/2010 - 01/2012",
    description: "I attended the course on Technologies and Information Systems (now called Computer Engineering) during the period indicated, having the opportunity to absorb knowledge in the area of Management, Digital Systems, Operating Systems, and Programming (Java), among other subjects."
  },
  {
    role: "Computer Technology",
    company: "IPSB",
    period: "09/2007 - 09/2010",
    description: "Student of the Computer Technological course dedicated to the Hardware, Management and Maintenance of Computer Networks during the period indicated, having the opportunity to absorb knowledge in a few programming languages such as Pascal, Visual Basic, C ++ and PHP, as well in development and implementation of computer networks."
  }
];

const workSetup = [
  { category: "Monitor 1", name: 'Xiaomi 34" 144hz 21:9 WQHD Curved' },
  { category: "Monitor 2", name: 'Arzopa Z1FC 16.1" 144Hz IPS Laptop Portable Monitor' },
  { category: "Monitor 3", name: 'Arzopa Z1FC 16.1" 144Hz IPS Laptop Portable Monitor' },
  { category: "Headset", name: "Steelseries Arctis Nova 5X Wireless" },
  { category: "Mic", name: "Krom Kapsule HQ Streaming" },
  { category: "Keyboard", name: "NuPhy Air75 V2" },
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
