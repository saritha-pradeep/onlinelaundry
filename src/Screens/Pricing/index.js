//
import React from "react";
import "./pricing.css";
import { Container, Row } from "reactstrap";
import LaundryItems from "../Booking/LaundryItems";
import Header from "../../Components/Header";

const Pricing = () => {
  return (
    <Container fluid className="p-0">
      <Header />
      <Row style={{ marginTop: 30 }}>
        <LaundryItems />
      </Row>
    </Container>
  );
};

export default Pricing;
