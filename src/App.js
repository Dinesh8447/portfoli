import About from './compoents/About';
import Context from './compoents/Context';
import Home from './compoents/Home';
import Navbar from './compoents/Navbar';
import Skills from './compoents/Skills';
import Work from './compoents/Work';
import './index.css';

function App() {
  return (
    <div >
      <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Work/>
     <Context/>
    </div>
  );
}

export default App;
