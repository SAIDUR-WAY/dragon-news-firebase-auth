import React from 'react'
import Header from '../pages/Shared/Header'
import Footer from '../pages/Shared/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import RightNavbar from '../pages/RightNavbar/RightNavbar'
import Leftnavbar from '../pages/Leftnavbar/Leftnavbar'
import { Outlet } from 'react-router-dom'
import Navigation from '../pages/Shared/Navigation'

const Main = () => {
  return (
    <Container>
      <Header></Header>
      <Navigation></Navigation>
      <Container>
        <Row>
          <Col sm={3}>
               <Leftnavbar></Leftnavbar>
          </Col>
          <Col sm={6}>
               <Outlet></Outlet>
               </Col>
          <Col sm={3}>
              <RightNavbar></RightNavbar>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
  )
}

export default Main
