import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/Logo.jpeg';
import { Link } from 'react-router-dom';

function NavbarReal() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
      <Container>
        <Navbar.Brand href="home"><img src={Logo} alt={'NTF'} className='logo' style={{width: '5rem', height: '5rem'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={'/'} className='navlink'>Home</Nav.Link>
            <Nav.Link as={Link} to={'about'} className='navlink'>About NTP</Nav.Link>
            <Nav.Link as={Link} to={'involve'} className='navlink'>Get Involved</Nav.Link>
            <Nav.Link as={Link} to={'issues'} className='navlink'>NTP Road Map</Nav.Link>
            <Nav.Link as={Link} to={'news'} className='navlink'>NTP Updates</Nav.Link>
            <Nav.Link as={Link} to={'contacts'} className='navlink'>Connect With NTP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReal;