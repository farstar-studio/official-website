import Head from 'next/head'
import {Navbar, Nav, Carousel} from 'react-bootstrap';

import Image from 'next/image'
import star from './images/star3.svg'
import styles from '../styles/Home.module.css'

import slide1 from './images/EOV/S01.jpg'
import slide2 from './images/EOV/S02.jpg'
import slide3 from './images/EOV/S03.jpg'
import slide4 from './images/EOV/S04.jpg'
import slide5 from './images/EOV/S05.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Far Star Studio</title>
        <link rel="icon" href="/farstar3.ico" />
      </Head>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
        <img
          className="d-inline-block align-top mx-2"
          src={star}
          alt="Far Star Studio Logo"
          width={30}
          height={30}
        />
          遠星工作室
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">英勇紋章</Nav.Link>
          </Nav>
          <Nav className="mx-2">
            <Nav.Link href="#features">關於我們</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      

      <main>
        <Carousel indicators={false}>
          <Carousel.Item>
            <div className="vw-100 vh-80 bg-black">
              <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
              />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide2}
              alt="Second slide"
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide3}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </main>

      <footer className={styles.footer}>
        <span>© FarStar Studio 2021</span>
      </footer>
    </div>
  )
}
