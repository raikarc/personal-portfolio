import React, { useState } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Placeholder data - replace with your actual information
  const personalInfo = {
    name: "Your Name",
    title: "Computer Science Student at UW",
    email: "yourname@uw.edu",
    linkedin: "linkedin.com/in/yourprofile",
    github: "github.com/yourusername",
    bio: "I'm a passionate Computer Science student at the University of Washington with interests in [your interests]. I love building [type of projects] and exploring [technologies/fields]."
  };

  const experiences = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Company Name",
      period: "Summer 2024",
      description: [
        "Developed feature XYZ that improved performance by X%",
        "Collaborated with cross-functional teams on project ABC",
        "Technologies used: React, Node.js, PostgreSQL"
      ]
    },
    {
      id: 2,
      title: "Teaching Assistant",
      company: "University of Washington",
      period: "Fall 2023 - Present",
      description: [
        "Assisted students in CSE XXX course",
        "Held office hours and graded assignments",
        "Led coding workshops for 50+ students"
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      name: "Project Name 1",
      description: "A brief description of what this project does and why it's interesting. Mention the problem it solves.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com"
    },
    {
      id: 2,
      name: "Project Name 2",
      description: "Another cool project you've worked on. Highlight the key features and your role in building it.",
      technologies: ["Python", "TensorFlow", "Flask"],
      github: "https://github.com/yourusername/project2",
      demo: null
    },
    {
      id: 3,
      name: "Project Name 3",
      description: "A third project showcasing different skills. This could be a hackathon project or personal endeavor.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold text-purple-600">{personalInfo.name}</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-purple-600 transition">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-purple-600 transition">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition">Contact</button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">About</button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl text-purple-600 mb-8">
            {personalInfo.title}
          </p>
          <div className="flex justify-center space-x-6">
            <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-purple-600 transition">
              <Mail size={24} />
            </a>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition">
              <Linkedin size={24} />
            </a>
            <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition">
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-purple-600">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 mt-2 sm:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.name}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-purple-600 transition"
                  >
                    <Github size={18} className="mr-1" />
                    Code
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-purple-600 transition"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            I'm always open to discussing new opportunities, collaborations, or just chatting about tech!
          </p>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 {personalInfo.name}. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
