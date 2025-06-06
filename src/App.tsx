import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  
  const sectionRefs = {
    header: useRef(null),
    about: useRef(null),
    tech: useRef(null),
    stats: useRef(null),
    connect: useRef(null)
  };

  const quotes = [
    "Code is poetry written in logic, and I'm fluent in both languages.",
    "Debugging is like being the detective in a crime movie where you are also the murderer.",
    "There are only 10 types of people in the world: those who understand binary and those who don't.",
    "Programming is the art of telling another human being what one wants the computer to do.",
    "The best error message is the one that never shows up.",
    "Code never lies, comments sometimes do.",
    "First, solve the problem. Then, write the code."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId) => visibleSections.has(sectionId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Header */}
      <div 
        ref={sectionRefs.header}
        id="header"
        className="container mx-auto px-4 py-8 relative z-10"
      >
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-lime-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
            GitHub README Preview
          </h1>
          <p className="text-xl text-neutral-300">Your awesome README.md in action!</p>
        </div>

        {/* Preview Container */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl shadow-2xl border border-neutral-700 overflow-hidden">
          {/* Browser-like header */}
          <div className="bg-neutral-900 px-6 py-3 flex items-center space-x-2 border-b border-neutral-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-neutral-400 text-sm font-mono">github.com/yourusername</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 bg-gradient-to-br from-neutral-900 to-black text-white">
            
            {/* Header Image */}
            <div className="mb-12 text-center">
              <img 
                src="/image.png" 
                alt="100xDEVS Header" 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-neutral-700"
              />
            </div>

            {/* Profile Stats */}
            <div className="flex justify-center space-x-4 mb-12">
              <span className="bg-gradient-to-r from-lime-400 to-emerald-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                🔥 Profile Views: 1,234
              </span>
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                👥 Followers: 567
              </span>
              <span className="bg-gradient-to-r from-green-400 to-lime-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                ⭐ Stars: 890
              </span>
            </div>

            {/* About Section */}
            <div 
              ref={sectionRefs.about}
              id="about"
              className="mb-16"
            >
              <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                🚀 About Me
              </h2>
              <div className={`space-y-6 text-center text-lg leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <p className="hover:text-lime-300 transition-colors duration-300 p-4 rounded-lg hover:bg-neutral-800/50">
                  💻 I write code that even bugs fall for—and sometimes, I let them stick around… just for the drama.
                </p>
                <p className="hover:text-lime-300 transition-colors duration-300 p-4 rounded-lg hover:bg-neutral-800/50">
                  🧠 Full-stack by skill, blockchain by obsession. Solana and Ethereum? Just two more places I break hearts and fix logic.
                </p>
                <p className="hover:text-lime-300 transition-colors duration-300 p-4 rounded-lg hover:bg-neutral-800/50">
                  😎 Built different: I seduce APIs, debug with a smirk, and turn caffeine into clean architecture.
                </p>
                <p className="hover:text-lime-300 transition-colors duration-300 p-4 rounded-lg hover:bg-neutral-800/50">
                  💬 Talk tech to me: Web3, smart contracts, NFTs, or how your backend could use... optimization 😉
                </p>
                <p className="hover:text-lime-300 transition-colors duration-300 p-4 rounded-lg hover:bg-neutral-800/50">
                  📚 Currently reverse-engineering the universe. Web3 is just step one.
                </p>
                <p className="hover:text-lime-300 transition-colors duration-300 p-4 rounded-lg hover:bg-neutral-800/50">
                  🔥 I don't chase clout—I commit, push, and let GitHub do the flexing.
                </p>
                <p className="hover:text-lime-300 transition-colors duration-300 p-4 rounded-lg hover:bg-neutral-800/50">
                  🎵 When I'm not coding, I'm lost in music—because good code and good beats both need perfect rhythm.
                </p>
                <p className="text-xl font-semibold hover:text-lime-300 transition-colors duration-300 p-4 rounded-lg hover:bg-neutral-800/50">
                  ☕ <strong>Fun fact:</strong> My code runs faster than your crush replying "wyd?"
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div 
              ref={sectionRefs.tech}
              id="tech"
              className="mb-16"
            >
              <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                ⚡ Tech Arsenal
              </h2>
              
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${
                isVisible('tech') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-lime-300 text-center">🔤 Languages</h3>
                  <div className="space-y-2">
                    {['C', 'C++', 'Python', 'Rust', 'Go', 'TypeScript', 'Solidity'].map((lang, index) => (
                      <span 
                        key={lang} 
                        className="inline-block bg-neutral-800 border border-lime-400/30 text-lime-400 px-3 py-1 rounded-full mr-2 mb-2 text-sm hover:bg-lime-400 hover:text-black transition-all duration-300 transform hover:scale-110"
                        style={{animationDelay: `${index * 100}ms`}}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-lime-300 text-center">🎨 Frontend</h3>
                  <div className="space-y-2">
                    {['Next.js', 'React.js', 'TanStack Query'].map((tech, index) => (
                      <span 
                        key={tech} 
                        className="inline-block bg-neutral-800 border border-lime-400/30 text-lime-400 px-3 py-1 rounded-full mr-2 mb-2 text-sm hover:bg-lime-400 hover:text-black transition-all duration-300 transform hover:scale-110"
                        style={{animationDelay: `${index * 100}ms`}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-lime-300 text-center">⚙️ Backend</h3>
                  <div className="space-y-2">
                    {['Node.js', 'Go Lang', 'Rust'].map((tech, index) => (
                      <span 
                        key={tech} 
                        className="inline-block bg-neutral-800 border border-lime-400/30 text-lime-400 px-3 py-1 rounded-full mr-2 mb-2 text-sm hover:bg-lime-400 hover:text-black transition-all duration-300 transform hover:scale-110"
                        style={{animationDelay: `${index * 100}ms`}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-lime-300 text-center">🗄️ Databases</h3>
                  <div className="space-y-2">
                    {['Prisma', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'Convex'].map((db, index) => (
                      <span 
                        key={db} 
                        className="inline-block bg-neutral-800 border border-lime-400/30 text-lime-400 px-3 py-1 rounded-full mr-2 mb-2 text-sm hover:bg-lime-400 hover:text-black transition-all duration-300 transform hover:scale-110"
                        style={{animationDelay: `${index * 100}ms`}}
                      >
                        {db}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-lime-300 text-center">🚀 DevOps & Cloud</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Docker', 'Nginx', 'AWS', 'GCP', 'Kubernetes', 'GitHub Actions'].map((tool, index) => (
                    <span 
                      key={tool} 
                      className="bg-gradient-to-r from-lime-400 to-emerald-500 text-black px-4 py-2 rounded-full text-sm font-bold hover:from-lime-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-110"
                      style={{animationDelay: `${index * 200}ms`}}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                💭 Developer Wisdom
              </h2>
              <div className="bg-gradient-to-r from-neutral-800 to-neutral-700 p-8 rounded-xl border border-neutral-600 transform hover:scale-105 transition-all duration-500">
                <p className="text-xl italic text-lime-300 mb-4 transition-all duration-500">
                  "{quotes[currentQuote]}"
                </p>
                <p className="text-sm text-neutral-400">- Developer's Philosophy #{currentQuote + 1}</p>
                <div className="flex justify-center mt-4 space-x-1">
                  {quotes.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentQuote ? 'bg-lime-400 scale-125' : 'bg-neutral-600'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* GitHub Stats Preview */}
            <div 
              ref={sectionRefs.stats}
              id="stats"
              className="mb-16"
            >
              <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                📊 GitHub Stats
              </h2>
              <div className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${
                isVisible('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-xl border border-neutral-700 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-4 text-lime-300">🔥 Contributions</h3>
                  <div className="text-4xl font-bold text-lime-400 mb-2">1,234</div>
                  <p className="text-neutral-400">Total commits this year</p>
                </div>
                <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-xl border border-neutral-700 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-4 text-lime-300">⭐ Repositories</h3>
                  <div className="text-4xl font-bold text-lime-400 mb-2">42</div>
                  <p className="text-neutral-400">Public repositories</p>
                </div>
                <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 rounded-xl border border-neutral-700 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-4 text-lime-300">🚀 Streak</h3>
                  <div className="text-4xl font-bold text-lime-400 mb-2">89</div>
                  <p className="text-neutral-400">Days coding streak</p>
                </div>
              </div>
            </div>

            {/* Connect Section */}
            <div 
              ref={sectionRefs.connect}
              id="connect"
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                🤝 Let's Connect
              </h2>
              <div className={`flex justify-center space-x-6 flex-wrap gap-4 transition-all duration-1000 delay-500 ${
                isVisible('connect') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <button className="bg-gradient-to-r from-lime-400 to-emerald-500 hover:from-lime-500 hover:to-emerald-600 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-110">
                  Twitter
                </button>
                <button className="bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-110">
                  LinkedIn
                </button>
                <button className="bg-gradient-to-r from-green-400 to-lime-500 hover:from-green-500 hover:to-lime-600 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-110">
                  Portfolio
                </button>
                <button className="bg-gradient-to-r from-lime-500 to-emerald-400 hover:from-lime-600 hover:to-emerald-500 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-110">
                  Email
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl p-6 border border-neutral-700 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-lime-400">📝 How to Use</h3>
            <p className="text-neutral-300 mb-4">
              Your README.md file is ready! Replace "yourusername" with your GitHub username and customize the links.
            </p>
            <div className="bg-neutral-900 p-4 rounded-lg text-left border border-neutral-700">
              <p className="text-sm text-neutral-400 mb-2">To get dynamic content working:</p>
              <ul className="text-sm text-lime-400 space-y-1">
                <li>• Replace all instances of "yourusername" with your GitHub username</li>
                <li>• Add your social media links in the connect section</li>
                <li>• Upload the header image to your repository</li>
                <li>• The stats and activity graphs will work automatically on GitHub</li>
                <li>• Random quotes will refresh each time someone visits your profile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;