import "./Skills.css";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiTypescript, SiVite, SiMongodb, SiSwagger } from "react-icons/si"; // Додано MongoDB, Swagger, Vite

function Skills() {
  const skills = [
    { name: "JavaScript", icon: <FaJsSquare color="#F7E017" size={50} /> },
    { name: "React", icon: <FaReact color="#61DBFB" size={50} /> },
    { name: "TypeScript", icon: <SiTypescript color="#007ACC" size={50} /> },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" size={50} /> },
    { name: "Git", icon: <FaGithub color="#333" size={50} /> }, // Додано Git
    { name: "HTML", icon: <SiSwagger color="#E34F26" size={50} /> }, // Додано HTML
    { name: "CSS", icon: <SiSwagger color="#1572B6" size={50} /> }, // Додано CSS
    { name: "Swagger", icon: <SiSwagger color="#85EA2D" size={50} /> }, // Додано Swagger
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" size={50} /> }, // Додано MongoDB
    { name: "Vite", icon: <SiVite color="#646CFF" size={50} /> }, // Додано Vite
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              type: "spring",
            }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;