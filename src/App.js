import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Home from './Components/Home';
import About from './Components/About';
import Involve from './Components/Involve';
import Issues from './Components/Issues';
import News from './Components/News';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      < NavbarComp />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/involve' element={<Involve />} />
          <Route path='/issues' element={<Issues />} />
          <Route path='/news' element={<News />} />
          <Route path='/contacts' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
