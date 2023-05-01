import moment from 'moment'
import React, { useState } from 'react'
import {
  Card,
  Col,
  Container,
  Figure,
  FloatingLabel,
  Image,
  Row,
} from 'react-bootstrap'
import {
  FaEye,
  FaLandmark,
  FaRegBookmark,
  FaRegStar,
  FaShare,
  FaShareAlt,
  FaStar,
} from 'react-icons/fa'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'
import StarsRating from 'react-star-rate'

const Newscard = ({ news }) => {
  // const [read, setRead] = useState(true)
  const [value, setValue] = useState(0)

  const {_id, title, details, image_url, author, total_view, rating } = news
  // const text = details

  return (
    <div className="my-4">
      <Container className="bg-primary bg-opacity-10">
        <Row className="d-flex align-items-center">
          <Col className="d-flex align-items-center ">
            <Image width={40} height={40} src={author?.img} roundedCircle />
            <div className="text-start ms-4 flex-grow-1">
              <p className="mb-0">{author?.name}</p>
              <small>
                {moment(author?.published_date).format('DD MM YYYY')}
              </small>
            </div>
            <div>
              <FaRegBookmark /> <FaShareAlt />
            </div>
          </Col>

          {/* <Col xs={6} md={6} className="text-end">
            <small className="pe-4">
              <FaLandmark />
            </small>
            <small>
              <FaShare></FaShare>
            </small>
          </Col> */}
        </Row>
      </Container>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />

        <Card.Body>
          <Card.Text>{(details.length <250 ) ? <> {details}</> :
           <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read more</Link></>}
           </Card.Text>
          {/* <span
            onClick={() => setRead(!read)}
            className="read-more text-info text-text-decoration-underline"
          >
            {read ? '...Read More' : 'Show Less'}
          </span> */}
        </Card.Body>

        <div  className='d-flex'>
          <div className='flex-grow-1 px-4'>
            <Rating
              placeholderRating={rating?.number}
              emptySymbol={<FaRegStar />}
              readonly
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
            {rating?.number}
          </div>
          <div className='px-4'>
            <FaEye /> {total_view}
          </div>
        </div>
      </Card>

      {/* <img width={1000} height={300} src={thumbnail_url} alt="" /> */}
    </div>
  )
}

export default Newscard
