import "./Hero.css";
import photo from '../assets/photo_2024-04-08_13-03-17.jpg';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Анімоване фото */}
      <motion.img
        src={photo}
        alt="Your Photo"
        className="hero-photo"
        initial={{ opacity: 0, y: -50 }} // Початковий стан
        animate={{ opacity: 1, y: 0 }}  // Анімований стан
        transition={{ duration: 1 }}    // Тривалість анімації
      />

      {/* Анімований заголовок */}
      <motion.h1
        initial={{ opacity: 0, x: -100 }} // Початковий стан
        animate={{ opacity: 1, x: 0 }}    // Анімований стан
        transition={{ duration: 1, delay: 0.5 }} // Затримка для заголовка
      >
        Hi! I’m Ali Novikova, a creative and detail-oriented web developer who combines system-driven solutions with critical thinking to deliver outstanding results. I’m passionate about crafting modern, functional, and visually appealing digital experiences.
      </motion.h1>

      {/* Анімований підзаголовок */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}  // Початковий стан
        animate={{ opacity: 1, y: 0 }}   // Анімований стан
        transition={{ duration: 1, delay: 1 }} // Затримка для тексту
      >
        Frontend Developer
      </motion.p>
    </section>
  );
}

export default Hero;