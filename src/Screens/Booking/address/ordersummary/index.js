import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaCheck } from "react-icons/fa";

import "./ordersummary.css"; // Create this CSS file for your styling

const OrderSummary = () => {
  return (
    <Container className="order-summary">
      <h3>Order Summary</h3>
      <div className="divider" />
      <Row className="row-item">
        <Col xs="1">
          <FaCheck color="green" />
        </Col>
        <Col xs="11">Address</Col>
      </Row>
      <Row className="row-item">
        <Col xs="1">
          <FaCheck color="green" />
        </Col>
        <Col xs="11">Item Selection</Col>
      </Row>
      <Row className="row-item">
        <Col xs="1">
          <FaCheck color="green" />
        </Col>
        <Col xs="11">Collection & Delivery</Col>
      </Row>
      <Row className="row-item">
        <Col xs="1">
          <FaCheck color="green" />
        </Col>
        <Col xs="11">Contact Details</Col>
      </Row>
      <div className="divider" />
      <Row className="row-total">
        <Col xs="6" className="text-left">
          Services Total
        </Col>
        <Col xs="6" className="text-right">
          <span className="opacity-05">£0.00</span>
        </Col>
      </Row>
      <Row className="row-total">
        <Col xs="6" className="text-left">
          Service Charges
        </Col>
        <Col xs="6" className="text-right">
          <span className="opacity-05">£0.99</span>
        </Col>
      </Row>
      <Row className="row-total">
        <Col xs="6">Grand Total</Col>
        <Col xs="6" className="text-right">
          <span className="opacity-05">£20.99</span>
        </Col>
      </Row>
      <button className="next-button">Next</button>
    </Container>
  );
};

export default OrderSummary;
