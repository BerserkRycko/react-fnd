import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Logo from './Logo'
import RenderUserLogin from './Navbar/RenderUserLogin'
import RenderButtonLogin from './Navbar/RenderButtonLogin'
import '../../scss/Navbar.scss'

const NavbarComponente = ({ user }) => (
  <Navbar expand='lg'>
    <Container fluid>
      <Navbar.Brand className='brand' href='/'>
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='navbarScroll' />
      <Navbar.Collapse id='navbarScroll'>
        <Nav
          className='me-auto my-2 my-lg-0'
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href='/'><p className='colorText'>¿Cómo funciona?</p></Nav.Link>
          <Nav.Link href='/' className='colorText'><p className='colorText'>Menú</p></Nav.Link>
          <Nav.Link href='/' className='colorText'><p className='colorText'>Planes</p></Nav.Link>
          <Nav.Link href='/' className='colorText'><p className='colorText'>Preguntas frecuentes</p></Nav.Link>
        </Nav>
        {
          user
            ? <RenderUserLogin user={user} />
            : <RenderButtonLogin />
        }

      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default NavbarComponente
