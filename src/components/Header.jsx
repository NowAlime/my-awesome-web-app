import { motion } from "framer-motion";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <motion.div
        className="header-logo"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Portfolio
      </motion.div>
      <nav className="navbar">
        <motion.a
          href="#hero"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Home
        </motion.a>
        <motion.a
          href="#skills"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Skills
        </motion.a>
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Projects
        </motion.a>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Contact
        </motion.a>
      </nav>
    </header>
  );
}

export default Header;