import { useState, useEffect, useRef } from "react";
import { BadgeCheck, FileCheck, Award, GraduationCap, ExternalLink } from "lucide-react";

const Certifications = () => {
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
      { threshold: 0.2 }
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

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: <BadgeCheck className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1NmA-7iLgXSPJkVJWcC1lOVmmwVq9zYYt/view", 
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "RedHat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      icon: <FileCheck className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/19CkbS-n-BfyvSYqp5SP1xYXz0j1MH_Fr/view?usp=sharing", 
      color: "from-red-400 to-red-600",
    },
    {
      title: "Oracle Certified Foundations Associate",
      issuer: "Oracle",
      icon: <Award className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1ghqI391ZoGG2t1uU_hP8B8GK13bEjPGQ/view?usp=sharing", 
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "REST API (Intermediate)",
      issuer: "HackerRank",
      icon: <FileCheck className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1fT1Jiq0-3Alg117SLXcGHeQCRzcPWJhU/view?usp=sharing", 
      color: "from-green-400 to-teal-500",
    },
    {
      title: "Java Backend Developer Challenge",
      issuer: "TechGig",
      icon: <BadgeCheck className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1gwqA8-B6cvLwEDbLIgEsLLgUC26u9HtE/view?usp=sharing", // Removed the # character
      color: "from-blue-400 to-indigo-600",
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      icon: <Award className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1Y6NfcC697rORIguppyaETkG0ovLDt7JJ/view?usp=sharing", 
      color: "from-indigo-400 to-purple-600",
    },
    {
      title: "NPTEL Certified Programming in C",
      issuer: "NPTEL",
      icon: <GraduationCap className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/13nuHwxg94kSAl4KRMoweSz7RXQyXU843/view?usp=sharing", // Removed the # character
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "Juniper networks Certified associate",
      issuer: "Juniper Networks",
      icon: <GraduationCap className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1EnoZ8yke4H6VZt2bErttEwXPoBBR7ARj/view?usp=sharing", // Removed the # character
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl -z-10 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl -z-10 opacity-60"></div>

      <div className="section-container">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-500/10 text-purple-400 mb-4">
            Achievements
          </div>
          <h2 className="section-title">My Certifications</h2>
          <p className="section-subtitle">
            Professional certifications that validate my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a 
              key={index} 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`certification-card glass-panel p-6 rounded-xl border border-white/5 hover:border-white/10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden relative group`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${index * 100}ms`
              }}
            >
              <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full bg-gradient-to-br ${cert.color} text-white`}>
                  {cert.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-white/60 group-hover:text-white/90 transition-colors">
                    View Certificate <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;