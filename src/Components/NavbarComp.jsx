import React from 'react'
import {Nav,Container,Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.jpeg';

const NavbarComp = () => {
  return (
    <div>
        <Navbar bg="dark" variant={'dark'} expand="lg" fixed='top'>
            <Container>
                <Navbar.Brand href="#home"><img src={Logo} alt={'NTF'} style={{width: '4rem', height: '4rem'}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to={'/'} className='navlink'>Home</Nav.Link>
                        <Nav.Link as={Link} to={'about'} className='navlink'>About Us</Nav.Link>
                        <Nav.Link as={Link} to={'involve'} className='navlink'>Get Involved</Nav.Link>
                        <Nav.Link as={Link} to={'issues'} className='navlink'>Issues</Nav.Link>
                        <Nav.Link as={Link} to={'news'} className='navlink'>News Updates</Nav.Link>
                        <Nav.Link as={Link} to={'contacts'} className='navlink'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavbarComp