import './App.css';
import Container from './components/Container/Container';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Container>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </Container>
    </>
  );
}

export default App;
