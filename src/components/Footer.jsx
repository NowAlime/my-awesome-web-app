import "./Footer.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  const links = [
    { name: "GitHub", icon: <FaGithub size={30} />, url: "https://github.com/NowAlime" },
    { name: "LinkedIn", icon: <FaLinkedin size={30} />, url: "https://www.linkedin.com/in/alinovikova/" },
    { name: "Telegram", icon: <FaTelegram size={30} />, url: "https://t.me/Alina_tour_agent" },
  ];

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2>Let’s work together</h2>
        <div className="contact-info">
          <p>
            <FaEnvelope size={20} style={{ marginRight: "10px", color: "white" }} />
            <a href="mailto:your-email@example.com">tour2017alina@gmail.com</a>
          </p>
          <p>
            <FaPhone size={20} style={{ marginRight: "10px", color: "#28A745" }} />
            <a href="tel:+123456789">+38097-94-96-396</a>
          </p>
        </div>
        <div className="social-links">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
      <p className="footer-credits">© 2025 Ali Novikova. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;