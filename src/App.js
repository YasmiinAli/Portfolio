import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="app">
    <NavBar />
    <Header />
    <About/>
    <Work />
    <Skills/>
    <Certificates/> 
    <Contact/>
    </div>
  );
}

export default App;
