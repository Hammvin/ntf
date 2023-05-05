import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import About from './Components/About';
import Involve from './Components/Involve';
import Issues from './Components/Issues';
import News from './Components/News';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import NavbarReal from './Components/NavbarReal';
import Landing from './Components/Landing';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div>
      <NavbarReal />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Home' element={<Home />} />
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
