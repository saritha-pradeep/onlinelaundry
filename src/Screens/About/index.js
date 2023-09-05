import React from "react";
import { Col, Container, Row } from "react-bootstrap"; // Import Bootstrap components
import "./about.css"; // Import a CSS file for additional styling
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const AboutUs = () => {
  return (
    <Container fluid className="about-us-container">
      <Row> 
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="about-us">
            <h1 className="head">About Us</h1>

            <p>
              Thank you for visiting WASH IT FRESH, your go-to source for
              high-quality laundry services that put your comfort and
              convenience first. Our goal is to give you more time to
              concentrate on the things that are most important in your life by
              making sure that your clothes are impeccable, clean, and fresh.
            </p>
            <h4>Our Commitment</h4>
            <p>
              We at WASH IT FRESH are aware that a busy modern lifestyle can
              leave you with little time for necessary errands like laundry.
              Here is where we come in. We strive to ease your daily routine
              with a commitment to quality and a passion for offering top-notch
              laundry services.
            </p>
            <h4>Convinent Locations</h4>
            <p>
              We take pleasure in having a vast network of launderettes in prime
              locations that make it simple for you to use our services wherever
              you are. We offer a nearby laundry business to fit your needs,
              whether you're a busy mom, a working professional, or a student.
              On our website, just input your postcode, and we'll assist you
              locate the closest place.
            </p>
            <h4>Quality You Can Trust</h4>
            <p>
              The core of what we do is quality. We use cutting-edge tools and
              work with knowledgeable experts who recognise the value in
              treating your clothes with the utmost care. Your clothing are in
              good hands with us, whether they are delicate textiles or regular
              wear. We take delight in paying close attention to every last
              detail to make sure your laundry is returned to you looking and
              feeling great.
            </p>
            <h4>Easy Booking</h4>
            <p>
              It's simple to schedule your laundry service with WASH IT FRESH.
              You can easily place orders and manage your reservations using our
              user-friendly website and smartphone app. You have a variety of
              options, such as conventional wash and fold and dry cleaning.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default AboutUs;
