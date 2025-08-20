
import { useState, useEffect, useRef } from "react";
import { Github, Star } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Donation Management System",
      description: "A full-stack application with JWT authentication, React frontend and Spring Boot backend to manage donation records efficiently.",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["Java", "React", "Spring Boot", "MySQL"],
      codeLink: "https://github.com/Vishnudatta02/JFSD-project",
      period: "Aug 2024 - Nov 2024",
      featured: false
    },
    {
      title: "Tender Management System",
      description: "A system for managing tenders and bids using Java and JSP, enhancing bid management efficiency by 45%.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["JSF", "EJB", "JPA", "MySQL"],
      codeLink: "https://github.com/Vishnudatta02/Tender_management_system",
      period: "Jun 2024 - Jul 2024",
      featured: false
    },
    {
      title: "Blood Donation Management System",
      description: "A Django-based system for tracking donations, improving efficiency by 55% and reducing manual record-keeping errors.",
      image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tags: ["Django", "Python", "PostgreSQL", "HTML/CSS"],
      codeLink: "https://github.com/Vishnudatta02/Blood_Donation_Management",
      period: "Dec 2023 - Apr 2024",
      featured: false
    },
    {
      title: "Service Management System",
      description: "A MERN stack application for service request tracking that improved efficiency by 60% and reduced processing time.",
      image: "https://media.istockphoto.com/id/1695598546/photo/businessman-using-tablet-to-transfer-data-on-cloud-computing-seamless-data-transfer-and.jpg?s=1024x1024&w=is&k=20&c=fpZGq8Q-fYvcq70cD4ebV88vanWfi0hCKOfEMkBPJPc=",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      codeLink: "http://github.com/Vishnudatta02/Service_Management",
      period: "Aug 2023 - Nov 2023",
      featured: false
    },
   
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="section-container">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 mb-4 animate-fade-in">
            My Work
          </div>
          <h2 className="section-title animate-fade-in" style={{ animationDelay: "150ms" }}>
            Featured Projects
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "300ms" }}>
            A showcase of my best work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group glass-panel rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                {/* Blurry placeholder */}
                <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-0"
                  onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center animate-fade-in">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                  {project.period}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium px-2 py-1 rounded-full bg-blue-500/10 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>
                
                <div className="flex gap-3">
                  <a
                    href={project.codeLink}
                    className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-gray-300 transition-all duration-300 hover:translate-x-1"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
