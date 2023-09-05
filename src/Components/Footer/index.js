import React from "react";
import  "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h1 className="text-white">WASH TO FRESH</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
            Find our dry cleaners London administrations and begin procuring all the benefits of proficient dry cleaning and clothing care nowadays. Advertising a free collection and conveyance benefit, at WASH IT FRESH we'll collect your things from your London area at the assigned time you’ve chosen. 
                        </p>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            {/* <div className="footer__quick-links">
              <h4 className="quick__links-title">Social Icons</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="https://www.facebook.com"><FaFacebook /></Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Furnitures</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Fashion</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div> */}
          </Col>

          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/about">About</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/booking">Booking</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
    <span>
      <i className="ri-map-pin-line"></i>
    </span>
    <p>123, Roehampton, London</p>
  </ListGroupItem>

  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
    <span>
      <i className="ri-phone-line"></i>
    </span>
    <p>+44 7123456789</p>
  </ListGroupItem>

  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
    <span>
      <i className="ri-mail-line"></i>
    </span>
    <p>washitfresh.info@gmail.com</p>
  </ListGroupItem>

  <ListGroupItem className="ps-0 border-0 d-flex justify-content-end">
    <a href="https://www.facebook.com" className="footer__social-icon">
      <FaFacebook />
    </a>
    <a href="https://www.instagram.com" className="footer__social-icon">
      <FaInstagram />
    </a>
    <a href="https://www.twitter.com" className="footer__social-icon">
      <FaTwitter />
    </a>
  </ListGroupItem>
</ListGroup>

            </div>
          </Col>


          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} Wash It Fresh. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;