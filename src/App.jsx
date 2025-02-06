import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="#hero">Про мене</a>
        <a href="#skills">Навички</a>
        <a href="#projects">Проекти</a>
        <a href="#footer">Контакти</a>
      </nav>
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
