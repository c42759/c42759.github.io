export default function AboutMe() {
  const birthDate = new Date('1991-10-28');
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cv-orange to-cv-peach rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative bg-white/90 dark:bg-[#1a1c1e]/90 backdrop-blur-sm border border-black/10 dark:border-cv-dark/50 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-cv-orange/10 rounded-lg">
              <svg className="w-6 h-6 text-cv-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-cv-dark dark:text-white tracking-tight">About Me</h2>
          </div>

          <div className="space-y-4 text-gray-700 dark:text-cv-light leading-relaxed">
            <p className="text-lg">
              Hello, my name is Carlos Santos, and I’m a {age} years old Software Engineer from the picturesque city of Aveiro.
              Since 2012, I’ve built a diverse career, gaining hands-on experience in various roles, from Full stack and backend development to project management and DevOps.
            </p>
            <p className="text-lg">
              My journey has taken me through multiple industries, including automotive, telecommunications, and analytics, where I’ve consistently delivered solutions that enhance productivity and drive technological advancements.
            </p>
            <p className="text-lg">
              In my most recent roles, I’ve focused on designing and implementing complex software architectures, automating workflows, and leading teams to success. Whether it’s developing scalable platforms, optimizing CI/CD pipelines, or enhancing user experience with robust front-end solutions, I bring a strong commitment to excellence and innovation in every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
