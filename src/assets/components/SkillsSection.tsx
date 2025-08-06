const skills = [
  { name: "JavaScript", level: 95, icon: "🟨" },
  { name: "TypeScript", level: 90, icon: "🔷" },
  { name: "React", level: 95, icon: "⚛️" },
  { name: "Next.js", level: 85, icon: "▲" },
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "Tailwind CSS", level: 90, icon: "🎨" },
  { name: "MongoDB", level: 75, icon: "🍃" },
  { name: "PostgreSQL", level: 70, icon: "🐘" },
  { name: "Git", level: 85, icon: "📚" },
  { name: "Docker", level: 70, icon: "🐳" },
  { name: "AWS", level: 65, icon: "☁️" },
  { name: "GraphQL", level: 75, icon: "📊" },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            My <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm constantly learning and improving my skills. Here are the technologies I work with regularly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                </div>
                <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Always eager to learn new technologies and take on challenging projects!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Learning", "Problem Solving", "Team Collaboration", "Agile Development"].map((soft) => (
              <span
                key={soft}
                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium"
              >
                {soft}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
