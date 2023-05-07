import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/Logo.jpeg';

function NavbarReal() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
      <Container>
        <Navbar.Brand href="home"><img src={Logo} alt={'NTF'} className='logo' style={{width: '5rem', height: '5rem'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About NTP</Nav.Link>
            <Nav.Link href="involve">Get Involved</Nav.Link>
            <Nav.Link href="issues">NTP Road Map</Nav.Link>
            <Nav.Link href="news">NTP Updates</Nav.Link>
            <Nav.Link href="contacts">Connect With NTP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReal;