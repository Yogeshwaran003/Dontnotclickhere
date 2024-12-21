// import logo from './logo.svg';
import './App.css';
import Navigationbarnew from './navigationbar'
import Hero from './hero';
import About from'./about'
import Project from'./project'
import Contact from './contact';
function App() {
  return (
    <div className="App">
      <Navigationbarnew/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
