import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    demoLink: "https://ecommerce-demo.com",
    githubLink: "https://github.com/IsmailOuali/ecommerce-platform",
    imageUrl: "/ecommerce-website-interface.png",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    techStack: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
    demoLink: "https://taskmanager-demo.com",
    githubLink: "https://github.com/IsmailOuali/task-manager",
    imageUrl: "/task-management-dashboard.png",
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    techStack: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    demoLink: "https://weather-dashboard-demo.com",
    githubLink: "https://github.com/IsmailOuali/weather-dashboard",
    imageUrl: "/weather-dashboard-interface.png",
  },
  {
    title: "Social Media Analytics",
    description: "A comprehensive analytics platform for social media metrics with data visualization and automated reporting features.",
    techStack: ["Next.js", "TypeScript", "D3.js", "Prisma", "PostgreSQL"],
    demoLink: "https://analytics-demo.com",
    githubLink: "https://github.com/IsmailOuali/social-analytics",
    imageUrl: "/analytics-dashboard.png",
  },
  {
    title: "Real Estate Platform",
    description: "A modern real estate platform with property listings, virtual tours, and advanced search functionality.",
    techStack: ["React", "Node.js", "MongoDB", "Mapbox", "AWS S3"],
    demoLink: "https://realestate-demo.com",
    githubLink: "https://github.com/IsmailOuali/real-estate-platform",
    imageUrl: "/real-estate-website-hero.png",
  },
  {
    title: "Learning Management System",
    description: "An educational platform with course management, video streaming, progress tracking, and interactive quizzes.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS"],
    demoLink: "https://lms-demo.com",
    githubLink: "https://github.com/IsmailOuali/learning-management",
    imageUrl: "/online-learning-platform.png",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Featured <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating amazing web experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/IsmailOuali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
