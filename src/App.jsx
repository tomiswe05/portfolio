import { RouterProvider } from 'react-router-dom'
import router from '../src/routes/route.jsx'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import { Element } from 'react-scroll';
import Project from './pages/Projects.jsx'
import './index.css'
function App(){
    return (
        <>
        
        <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Project />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      

        </>
    );
}
 export default App;
