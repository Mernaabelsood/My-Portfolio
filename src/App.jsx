import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AppWrapper from "./components/AppWrapper"; // Import the wrapper

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <About />
      <Skills />
<Projects/>
      <Contact />
    </AppWrapper>
  );
}

export default App;
