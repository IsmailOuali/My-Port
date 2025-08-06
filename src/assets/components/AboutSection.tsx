const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50"></div>
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <div className="animate-slide-in-left">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="absolute top-4 left-4 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl"></div>

              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/50">
                <img
                  src="/professional-developer-portrait.png"
                  alt="Ismail Ouali"
                  className="w-full h-80 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-4 shadow-xl animate-float">
                  <span className="text-white text-3xl">👨‍💻</span>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-xl animate-float-delayed">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="animate-slide-in-right">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                Get to know me
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                About{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Me
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-8">
              <p className="relative pl-6">
                <span className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2"></span>
                I'm a passionate full-stack developer with over 3 years of experience
                building modern web applications. I specialize in React, TypeScript,
                and Node.js, with a keen eye for creating intuitive user experiences.
              </p>

              <p className="relative pl-6">
                <span className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"></span>
                My journey in web development started with a curiosity about how
                websites work, and it has evolved into a deep passion for crafting
                digital solutions that make a real impact. I believe in writing
                clean, maintainable code and staying up-to-date with the latest
                industry trends.
              </p>

              <p className="relative pl-6">
                <span className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2"></span>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-purple-100 group-hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      50+
                    </div>
                    <div className="text-gray-600 font-medium">Projects Completed</div>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mt-2"></div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-blue-100 group-hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      3+
                    </div>
                    <div className="text-gray-600 font-medium">Years Experience</div>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mt-2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'MongoDB'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium hover:from-purple-200 hover:to-blue-200 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
