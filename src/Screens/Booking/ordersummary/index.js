import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaCheck } from "react-icons/fa";

import "./ordersummary.css"; // Create this CSS file for your styling
import { useSelector } from "react-redux";

const OrderSummary = ({
  showBottomButtons = true,
  showPrev = true,
  showNext = true,
  nextButtonPlaceholder = "Next",
  onPrevButtonClick = () => {},
  onNextButtonClick = (nextButtonPlaceholder) => {},
}) => {
  const state = useSelector((state) => state);
  const sections = state.bookingReducer.sections;
  const grandTotal = state.bookingReducer.totalPrice
  return (
    <Container className="order-summary">
      <h3>Order Summary</h3>
      <div className="divider" />
      <Row>
        {sections.map((item, index) => {
          return (
            <Row className="row-item">
              <Col xs="1">
                <FaCheck color={item.active ? "green" : "grey"} />
              </Col>
              <Col xs="11">{item.tabname}</Col>
            </Row>
          );
        })}
      </Row>
      <div className="divider" />
      {grandTotal > 10 && (
        <>
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
              <span className="opacity-05">£{grandTotal}</span>
            </Col>
          </Row>
        </>
      )}
      {showBottomButtons && (
        <Row style={{ marginTop: 30 }}>
          {showPrev && (
            <Col xs={showNext ? "6" : "12"}>
              <Button style={{ width: "100%" }} onClick={onPrevButtonClick}>
                Previous
              </Button>
            </Col>
          )}
          {showNext && (
            <Col xs={showPrev ? "6" : "12"}>
              <Button
                color="primary"
                style={{ width: "100%" }}
                onClick={onNextButtonClick}
              >
                {nextButtonPlaceholder}
              </Button>
            </Col>
          )}
        </Row>
      )}
    </Container>
  );
};

export default OrderSummary;
