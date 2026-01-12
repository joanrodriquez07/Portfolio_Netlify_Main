import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="hero">
          <h1>Joan Immanuel Rodriquez</h1>
          <p>Web Developer | Java | Spring Boot | React | SQL</p>
          <a href="/resume.pdf" download className="btn">Download Resume</a>
        </section>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
