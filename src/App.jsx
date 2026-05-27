import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects"; 
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
    return(
        <>
          <Background />
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </>
    );
}

export default App
