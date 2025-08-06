const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="relative">
              <img
                src="/professional-developer-portrait.png"
                alt="Ismail Ouali"
                className="w-80 h-80 rounded-2xl object-cover shadow-2xl mx-auto lg:mx-0"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl font-bold">👨‍💻</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up delay-200">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 3 years of experience 
                building modern web applications. I specialize in React, TypeScript, 
                and Node.js, with a keen eye for creating intuitive user experiences.
              </p>
              
              <p>
                My journey in web development started with a curiosity about how 
                websites work, and it has evolved into a deep passion for crafting 
                digital solutions that make a real impact. I believe in writing 
                clean, maintainable code and staying up-to-date with the latest 
                industry trends.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
