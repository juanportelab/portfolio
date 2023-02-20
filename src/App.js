import './App.css';
import Container from './components/Container/Container';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Container>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
    </Container>
    </>
  );
}

export default App;
