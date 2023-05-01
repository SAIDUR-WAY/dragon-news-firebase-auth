import React from 'react'
import logo from '../../assets/logo.png'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import moment from 'moment/moment'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format('dddd, MMMM D, YYYY')}</p>
      </div>
      <div className='d-flex'>
        <Button className="border-0 rounded-0" variant="danger">
          Latest
        </Button >
        <Marquee speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
        
      </div>
      {/* <Navbar className='mb-5' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-decoration-none">
            <Link className='text-decoration-none px-2' to="/">Home</Link>
            <Link className='text-decoration-none px-2' to="/about">About</Link>
            <Link className='text-decoration-none px-2' to="/career">Career</Link>

          </Nav>
          <Nav>
            
            <Button variant="dark"><Link to='/login'>Login</Link></Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </>
  )
}

export default Header
