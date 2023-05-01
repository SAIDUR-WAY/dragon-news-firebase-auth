import React from 'react';
import Header from '../pages/Shared/Header'
import Footer from '../pages/Shared/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import RightNavbar from '../pages/RightNavbar/RightNavbar'
import { Outlet } from 'react-router-dom'

const NewsLayout = () => {
     return (
          <div>
               <Container>
      
      <Container>
        <Row>
          <Col sm={9}>
               <Outlet></Outlet>
               </Col>
          <Col sm={3}>
              <RightNavbar></RightNavbar>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
          </div>
     );
};

export default NewsLayout;