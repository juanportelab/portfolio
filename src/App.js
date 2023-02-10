import './App.css';
import Container from './components/Container/Container';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Container>
      <AboutMe></AboutMe>
    </Container>
    </>
  );
}

export default App;
