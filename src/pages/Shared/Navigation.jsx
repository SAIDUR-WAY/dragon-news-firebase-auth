import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
     return (
          <div>
                <Navbar className='mb-5' collapseOnSelect expand="lg" bg="light" variant="light">
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
            <Button variant="dark"><Link to='/register'>SignUp</Link></Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          </div>
     );
};

export default Navigation;