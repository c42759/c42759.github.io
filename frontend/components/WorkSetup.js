export default function WorkSetup({ setup }) {
  // Categorize setup items for better grid layout
  const categorizeSetup = () => {
    const categories = {
      Displays: [],
      Peripherals: [],
      PC: [],
    };

    setup.forEach(item => {
      const lowerCat = item.category.toLowerCase();
      if (lowerCat.includes("monitor") || lowerCat.includes("display")) {
        categories.Displays.push(item);
      } else if (["headset", "mic", "keyboard", "mouse", "webcam"].includes(lowerCat)) {
        categories.Peripherals.push(item);
      } else {
        categories.PC.push(item);
      }
    });
    return categories;
  };

  const categorized = categorizeSetup();

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center space-x-3 mb-10">
        <div className="p-2 bg-cv-orange/10 rounded-lg">
          <svg className="w-6 h-6 text-cv-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">My Setup</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(categorized).map(([category, items], idx) => (
          <div key={idx} className="bg-[#1a1c1e] border border-cv-dark/40 rounded-2xl p-6 hover:border-cv-orange/50 transition-colors duration-300">
            <h3 className="text-lg font-bold text-cv-peach mb-4 flex items-center border-b border-cv-dark/50 pb-2">
              {category}
            </h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex flex-col space-y-1">
                  <span className="text-xs font-semibold text-cv-orange uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-sm text-cv-light">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
