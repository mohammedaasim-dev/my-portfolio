import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Skills from "./components/home/Skills";
import Projects from "./components/home/Projects";
import GitHubStats from "./components/home/GitHubStats";
import Experience from "./components/home/Experience";
import Contact from "./components/home/Contact";
import Background from "./components/common/Background";
import LoadingScreen from "./components/common/LoadingScreen";
import ScrollToTop from "./components/common/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Certifications from "./components/home/Certifications";

function App() {
  return (
    <>
      <LoadingScreen />
      <Background />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubStats />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;