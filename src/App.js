import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home';
import About from './Components/About';
import Invalve from './Components/Invalve';
import Issues from './Components/Issues';
import News from './Components/News';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Logo from './images/Logo.jpeg';
import {Nav,Container,Navbar} from 'react-bootstrap'
import {Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="warning" variant="">
          <Container>
            <Navbar.Brand as={Link} to='/'><img src={Logo} alt={'NTF'} style={{width: '4rem', height: '4rem'}}/></Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to='/invalve'>Get Invalved</Nav.Link>
              <Nav.Link as={Link} to='/issues'>Issues</Nav.Link>
              <Nav.Link as={Link} to='/news'>News</Nav.Link>
              <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/invalve' element={<Invalve />} />
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
