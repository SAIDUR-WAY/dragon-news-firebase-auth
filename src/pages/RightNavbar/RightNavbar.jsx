import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'
import Qzone from './Qzone'
import bg from '../../assets/bg.png'

const RightNavbar = () => {
  return (
    <>
      <div>
        <h3>Login With</h3>
        <Button className="w-100 mb-2" variant="outline-secondary">
          <FaGoogle />
          Login With Google
        </Button>
        <Button className="w-100 mb-2" variant="outline-secondary">
          <FaGithub /> Login With Github
        </Button>
      </div>
      <div className="my-4">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2 border-0 cursor-pointer">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 border-0">
            <FaInstagram /> Instragram
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 border-0">
            <FaTwitter /> Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div className="py-4 position-relative text-white">
          <img  src={bg} alt="" />
        <div className="text-center p-4 position-absolute top-50 start-50 translate-middle">
          <h2 className='pb-2'>Create an Amazing Newspaper</h2>
          <p>
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button className="rounded-0 py-3 px-4  " variant="danger">
            Learn More
          </Button>
        </div>
      </div>
    </>
  )
}

export default RightNavbar
