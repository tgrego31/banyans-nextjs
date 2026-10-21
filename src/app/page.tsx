"use client";

import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { CaretDownFill, Facebook, Instagram, Tiktok, TwitterX } from 'react-bootstrap-icons';

function TopMenu() {
  return (
    <Navbar bg="light" expand="lg" className="top-menu">
      <Container>
        <Navbar.Brand href="#home"><Image src="/wod-banyans-logo.png" alt="Banyans Craft Kitchen and Lounge" width={220} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="banyans-navbar" />
        <Navbar.Collapse id="banyans-navbar" className="justify-content-end">
          <Nav className="align-items-lg-center">
            <Nav.Link href="#home" active>Home</Nav.Link>
            <Nav.Link href="#menu">Banyans Menu</Nav.Link>
            <Nav.Link href="#reservations">Reservations</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#gift-cards">Gift Cards</Nav.Link>
            <Nav.Link href="https://www.instagram.com/" aria-label="Instagram"><Instagram /></Nav.Link>
            <Nav.Link href="https://www.facebook.com/" aria-label="Facebook"><Facebook /></Nav.Link>
            <Nav.Link href="https://x.com/" aria-label="X"><TwitterX /></Nav.Link>
            <Nav.Link href="https://www.tiktok.com/" aria-label="TikTok"><Tiktok /></Nav.Link>
            <Button variant="light" className="language-button">English <CaretDownFill size={11} /></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function CenterText() {
  return (
    <main className="hero d-flex align-items-center justify-content-center" id="home">
      <Container className="text-center hero-content">
        <h1>GLOBALLY INSPIRED, LOCALLY<br />SOURCED</h1>
        <h3>KAILUA&apos;S CRAFT KITCHEN AND LOUNGE</h3>
        <h5>Live Music Fridays and Saturdays</h5>
      </Container>
    </main>
  );
}

function BottomMenu() {
  return (
    <footer className="bottom-menu py-3">
      <Container>
        <Row className="gy-4">
          <Col xs={12} md={3} lg={2}>
            <h3>LOCATION</h3>
            <strong>KAILUA</strong><br />
            32 Malinu Ave,<br />
            Kailua, HI 96734<br />
            (808) 261-6733
          </Col>
          <Col lg={1} className="d-none d-lg-block" />
          <Col xs={12} md={6} lg={5}>
            <h3>BUSINESS HOURS</h3>
            <Row className="gy-3">
              <Col xs={12} sm={6}>
                <strong>Mondays, Wednesdays, Thursdays</strong><br />
                OPEN 4pm - 10pm<br />
                Happy Hour 4pm - 6pm<br />
                Dinner 4pm - 9pm<br />
                <strong>Fridays</strong><br />
                OPEN 4pm - 11pm<br />
                Happy Hour 4pm - 6pm<br />
                Dinner 4pm - 10pm
              </Col>
              <Col xs={12} sm={6}>
                <strong>Saturdays</strong><br />
                OPEN 9am - 11pm<br />
                Brunch 9am - 1pm<br />
                Happy Hour 4pm - 6pm<br />
                Dinner 4pm - 10pm
              </Col>
            </Row>
          </Col>
          <Col lg={1} className="d-none d-lg-block" />
          <Col xs={12} md={3} lg={3}>
            <h3>SUBSCRIBE</h3>
            <form className="subscribe-form">
              <input type="text" placeholder="First Name" aria-label="First Name" />
              <input type="text" placeholder="Last Name" aria-label="Last Name" />
              <input type="email" placeholder="Email Address" aria-label="Email Address" />
              <Button variant="light" type="button">Sign Up</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default function Home() {
  return <div className="page-shell"><TopMenu /><CenterText /><BottomMenu /></div>;
}
