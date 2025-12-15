import { useState, useEffect, useRef } from "react";
import { GraduationCap, Calendar, School, Award, MapPin, Info, FileDown } from "lucide-react";

const About = () => {
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

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", url: "https://www.java.com/", category: "Programming Language" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://www.python.org/", category: "Programming Language" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", category: "Programming Language" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://en.cppreference.com/w/c", category: "Programming Language" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://reactjs.org/", category: "Frontend" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", category: "Frontend" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", category: "Frontend" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com/", category: "Frontend" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com/", category: "Frontend" },
    { name: "JSP", icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg", url: "https://www.oracle.com/java/technologies/jspt.html", category: "Frontend" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", url: "https://spring.io/projects/spring-boot", category: "Backend" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", url: "https://www.djangoproject.com/", category: "Backend" },
    { name: "Hibernate", icon: "https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg", url: "https://hibernate.org/", category: "Backend" },
    { name: "RESTful APIs", icon: "https://www.vectorlogo.zone/logos/openapis/openapis-icon.svg", url: "https://restfulapi.net/", category: "Backend" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://www.mysql.com/", category: "Database" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://www.postgresql.org/", category: "Database" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://www.mongodb.com/", category: "Database" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com/", category: "Tool" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com/", category: "Tool" },
    { name: "Maven", icon: "https://www.vectorlogo.zone/logos/apache_maven/apache_maven-icon.svg", url: "https://maven.apache.org/", category: "Tool" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://www.linux.org/", category: "Tool" },
    { name: "Agile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", url: "https://www.agilealliance.org/", category: "Tool" },
  ];

  const education = [
    {
      degree: "B.Tech",
      institute: "Koneru Lakshmaiah Education Foundation",
      score: "CGPA: 9.25",
      year: "2022-2026",
      logo: "/images/ea9e0c4c-6039-4582-96b0-c8342595bbbd.png",
      description: "Computer Science and Engineering",
      location: "Vaddeswaram, Guntur District"
    },
    {
      degree: "Intermediate",
      institute: "Sri Chaitanya Junior College",
      score: "Marks: 976",
      year: "2020-2022",
      logo: "/images/b5aaf7da-c35b-412a-9e83-6c75ae7535d1.png",
      description: "Mathematics, Physics, Chemistry (MPC)",
      location: "Vijayawada, Krishna District"
    },
    {
      degree: "Matriculation",
      institute: "Sri Chaitanya High School",
      score: "Marks: 600",
      year: "2019-2020",
      logo: "/images/b5aaf7da-c35b-412a-9e83-6c75ae7535d1.png",
      description: "State Syllabus",
      location: "Kavali, SPSR Nellore District"
    }
  ];

  const skillCategories = {
    "Programming Language": "bg-purple-500/15 border-purple-500/30 text-purple-300",
    "Frontend": "bg-blue-500/15 border-blue-500/30 text-blue-300",
    "Backend": "bg-green-500/15 border-green-500/30 text-green-300",
    "Database": "bg-orange-500/15 border-orange-500/30 text-orange-300",
    "Tool": "bg-pink-500/15 border-pink-500/30 text-pink-300",
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="section-container">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400">About Me</span>
          <h2 className="section-title mt-4">My Background</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-gray-300 mb-4">
                I'm a CSE student at KL University and a full stack developer who enjoys building real, usable digital experiences.
              </p>
              <p className="text-gray-300 mb-4">
                I work with AWS, Java, and modern web technologies and I like solving problems and building things that feel smooth and reliable.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#certifications" className="text-blue-400 hover:text-blue-500 flex items-center gap-2">
                  View My Certifications →
                </a>

                <a
                  href="https://drive.google.com/file/d/1BF4CDrGNF1sWh53qEmLuW3UHYuy8MG5n/view?usp=sharing"
                  className="text-blue-400 hover:text-blue-500 flex items-center gap-2"
                >
                  View Resume <FileDown className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-500 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">My Skills</h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(skillCategories).map(([name, cls]) => (
                  <span key={name} className={`px-3 py-1.5 rounded-full text-sm border ${cls}`}>
                    {name}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`skill-card p-3 rounded-xl border ${skillCategories[skill.category]}`}
                  >
                    <img src={skill.icon} alt={skill.name} className="w-10 h-10 mx-auto mb-2" />
                    <p className="text-center text-sm">{skill.name}</p>
                  </a>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-4">Education</h4>

                <div className="space-y-5">
                  {education.map((edu) => (
                    <div key={edu.degree} className="glass-panel p-5 rounded-xl hover:bg-blue-500/5 transition">
                      <div className="flex gap-4">
                        <img src={edu.logo} className="w-20 h-20 object-contain rounded-lg" />

                        <div className="flex-1">
                          <h5 className="text-xl font-bold">{edu.degree}</h5>

                          <p className="text-gray-300">{edu.institute}</p>
                          <p className="text-sm text-gray-400 mt-1">{edu.description}</p>

                          <div className="flex justify-between text-sm mt-3">
                            <span className="flex items-center gap-1 text-blue-300">
                              <MapPin className="w-4 h-4" /> {edu.location}
                            </span>

                            <span className="flex items-center gap-1 text-green-300">
                              <Info className="w-4 h-4" /> {edu.score}
                            </span>
                          </div>

                          <div className="mt-2 text-blue-400 text-sm flex items-center gap-1">
                            <Calendar className="w-4 h-4" /> {edu.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
